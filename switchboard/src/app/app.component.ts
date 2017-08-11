import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  switches = {
    one: 'On',
    two: 'On',
    three: 'On',
    four: 'On',
    five: 'On',
    six: 'On',
    seven: 'On',
    eight: 'On',
  }

  flip(ind) {
    for (var key in this.switches) {
      if (key == ind) {
        if (this.switches[key] == 'On') {
          this.switches[key] = 'Off';
        } else {
          this.switches[key] = 'On';
        }
      }
    }
  }

}
