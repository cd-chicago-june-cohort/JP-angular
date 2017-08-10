import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  emails = [
    {email: 'bill@gates.com', importance: 'High', subject: 'New Windows', content: 'Windows XI will launce in year 2100.'},
    {email: 'ada@lovelace.com', inportance: 'High', subject: 'Programming', content: 'Enchantree of Numbers'},
    {email: 'jp@doherty.com', inportance: 'High', subject: 'Programming', content: 'Badass programmer'},
    {email: 'richard@feynman.com', inportance: 'High', subject: 'Physics', content: 'Feynman the safecracker'},
  ];
}
