import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/shared/models/user.model';

@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.scss']
})
export class UserListViewComponent implements OnInit {
  @Input() users: User[] = [];
  @Output() selectedUser = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

}
