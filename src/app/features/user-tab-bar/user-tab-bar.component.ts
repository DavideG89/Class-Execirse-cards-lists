import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-user-tab-bar',
  templateUrl: './user-tab-bar.component.html',
  styleUrls: ['./user-tab-bar.component.scss']
})
export class UserTabBarComponent implements OnInit {
  @Input() actualView = true;
  @Output() toggleCardView = new EventEmitter<boolean>();
  @Output() showUserModal = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

}
