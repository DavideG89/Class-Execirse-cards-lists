import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-model-delete',
  templateUrl: './model-delete.component.html',
  styleUrls: ['./model-delete.component.scss']
})
export class ModelDeleteComponent implements OnInit {
  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
