import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes = [];

  newQuote = {
    content: "",
    author: "",
    votes: 0
  }

  onSubmit() {
    this.quotes.push(this.newQuote);
    this.newQuote = {
      content: "",
      author: "",
      votes: 0
    }
  }

  compare(a, b) {
    if (a.votes > b.votes) {
      return -1;
    } else if (a.votes < b.votes) {
      return 1;
    } else {
      return 0;
    }
  }

  upvote(eventData) {
    this.quotes[eventData].votes += 1;
    this.quotes.sort(this.compare);
  }

  downvote(eventData) {
    this.quotes[eventData].votes -= 1;
    this.quotes.sort(this.compare);
  }

  destroy(eventData) {
    this.quotes.splice(eventData, 1);
  }

}
