import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  vals = Array(100).fill(0).map((x,i)=>i+1);

  initialPowerLevel;

  humanComponent;
  saiyanComponent;
  superSaiyanComponent;
  superSaiyanComponentTwo;
  superSaiyanComponentThree;
  superSaiyanComponentFour;
  messageTwo;
  messageThree;
  messageFour;
  
  onSubmit() {

    event.preventDefault();

    this.humanComponent = this.initialPowerLevel * 1;
    this.saiyanComponent = this.initialPowerLevel * 10;
    this.superSaiyanComponent = this.initialPowerLevel * 90;
    this.superSaiyanComponentTwo = this.initialPowerLevel * 150;
    this.superSaiyanComponentThree = this.initialPowerLevel * 250;
    this.superSaiyanComponentFour = this.initialPowerLevel * 500;
    
    if (this.superSaiyanComponentTwo > 9000) {
      this.messageTwo = "Over 9,000!";
    } else {
      this.messageTwo = '  ';
    }

    if (this.superSaiyanComponentThree > 20000) {
      this.messageThree = "Superlative!";
    } else if (this.superSaiyanComponentThree > 9000) {
      this.messageThree = "Over 9,000!";
    } else {
      this.messageThree = '  ';
    }

    if (this.superSaiyanComponentFour === 50000) {
      this.messageFour = "The One";
    } else if (this.superSaiyanComponentFour > 20000) {
      this.messageFour = "Superlative";
    } else if (this.superSaiyanComponentFour > 9000) {
      this.messageFour = "Over 9,000!";
    } else {
      this.messageFour = '';
    }


  }

}
