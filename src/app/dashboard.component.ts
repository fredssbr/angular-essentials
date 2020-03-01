import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <p>Type in your loading message: <input type="text" [(ngModel)]="loadState"></p>
    <button type="button" (click)="onChangeState()" >Change state</button>
    <p [textContent]="loadState"></p>
  `
})
export class DashboardComponent{
  loadState = 'loading';

  onChangeState() {
    this.loadState = 'finished';
  }
}
