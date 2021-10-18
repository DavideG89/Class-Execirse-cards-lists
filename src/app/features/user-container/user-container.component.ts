import { Component, HostListener, OnInit } from '@angular/core';
import { USERS } from 'src/shared/models/mock-data';
import { IUser, User } from 'src/shared/models/user.model';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {
  public users: User[] = USERS.map(user => User.Build(user));
  public isCardView = true;
  public showOrdersModal = false;
  public selectedUser: User = User.Build({} as IUser);
  public showUserModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:keydown.escape')
  public closeModals(): void {
    this.showOrdersModal = false;
    this.showUserModal = false;
    this.selectedUser = User.Build({} as IUser);
  }

  public saveUser(user: IUser): void {
    const foundedUserIndex = this.users.findIndex(u => user.id === u.id);

    if (foundedUserIndex >= 0) {
      this.users[foundedUserIndex] = User.Build(user)
    } else {
      user.id = Math.random().toString(36).replace('0.', '').substring(2,9);
      this.users.push(User.Build(user));
    }
    this.closeModals();
  }


  public deleteUser(userId: string) {
    this.users = this.users.filter(user => user.id !== userId);
  }

}
