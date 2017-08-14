import { Component } from '@angular/core';
import { QuotesService } from './quotes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  number;

  quotes = [];

  constructor(private _qService: QuotesService) {}
  getIt() {
    this._qService.retrieveQuote()
      .then(quote => this.quotes = quote)
      .catch(err => console.log(err));
  }
  getMany() {
    this._qService.retrieveManyQuotes(this.number)
      .then(quotes => this.quotes = quotes)
      .catch(err => console.log(err));
  }



}
