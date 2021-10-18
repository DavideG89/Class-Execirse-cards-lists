import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser, User } from 'src/shared/models/user.model';

@Component({
  selector: 'app-user-card-view',
  templateUrl: './user-card-view.component.html',
  styleUrls: ['./user-card-view.component.scss']
})
export class UserCardViewComponent implements OnInit {
  @Input() user: User = User.Build({} as IUser);
  @Output() selectedUser = new EventEmitter<User>();
  @Output() deleteUser = new EventEmitter<string>();
  @Output() editUser = new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }

}
