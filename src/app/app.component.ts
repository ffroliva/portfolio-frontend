import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-frontend';
  selectedValue: number;
  items: any = [
    {view: 'aaa', value: 1},
    {view: 'bbb', value: 2},
  ];

  click() {
    console.log('cliquei');
  }
}
