import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  date = new Date();

  yellow = '';

  hide = false;

  setZone(zone) {
    this.date = new Date();
    this.hide = false;
    if (zone === 'PST') {
      this.date.setHours(this.date.getHours() - 2);
      this.yellow = 'PST';
    } else if (zone === 'MST') {
      this.date.setHours(this.date.getHours() - 1);
      this.yellow = 'MST';
    } else if (zone === 'CST') {
      this.date.setHours(this.date.getHours());
      this.yellow = 'CST';
    } else if (zone === 'EST') {
      this.date.setHours(this.date.getHours() + 1);
      this.yellow = 'EST';
    }
  };

  clear() {
    this.yellow = '';
    this.hide = true;
  }


}
