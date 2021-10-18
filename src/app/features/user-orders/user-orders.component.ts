import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser, User } from 'src/shared/models/user.model';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {
  @Input() user: User = User.Build({} as IUser);
  @Output() closeModal = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  get total(): number {
    return this.user.orders
      .map(order => order.product.price * order.quantity)
      .reduce((acc, curr) => acc + curr, 0);
  }
}
