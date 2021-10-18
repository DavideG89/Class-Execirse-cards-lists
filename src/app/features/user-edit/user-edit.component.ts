import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelDeleteComponent } from 'src/shared/components/model-delete/model-delete.component';
import { IUser, User } from 'src/shared/models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  @Input() user: User = User.Build({} as IUser);
  @Output() closeUserModal = new EventEmitter<void>();
  @Output() savedUser = new EventEmitter<IUser>();
  public userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [this.user.name, [Validators.required]],
      mail: [this.user.mail, [Validators.required, Validators.email]],
      location: this.fb.group({
        address: [this.user.location.address, [Validators.required]],
        city: [this.user.location.city, [Validators.required]],
      })
    });
  }

  public closeModal(): void {

    if (this.userForm.dirty) {


      const modalRef = this.ngbModal.open(ModelDeleteComponent, { centered: true });

      modalRef.componentInstance.confirm.subscribe((result: boolean) => {

        if (result) {
          this.closeUserModal.emit();
        }
        modalRef.close()
      });
    } else {

      this.closeUserModal.emit();
    }

  }

  public saveUser(): void {
    this.savedUser.emit({ ...this.user, ...this.userForm.value,}  as IUser);
  }

  public get location(): FormGroup {
    return this.userForm.get('location') as FormGroup;
  }
}
