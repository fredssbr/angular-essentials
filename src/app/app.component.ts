import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials';
  rootName = 'Fred';
  items = [
    "Apples",
    "Bananas",
    "Cherries"
  ];

  onNameChanged(newName) {
    this.rootName = newName;
  }

  onAddedItem(newItem) {
    this.items.push(newItem);
    console.log(this.items);
  }

}
