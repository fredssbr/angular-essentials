import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() items = [];

  @Output() addItem = new EventEmitter<string>();

  item = '';

  constructor() { }

  onUserInput(event) {
    this.item = event.target.value;
  }

  onAddItem() {
    this.addItem.emit(this.item);
  }

  ngOnInit(): void {
  }

}
