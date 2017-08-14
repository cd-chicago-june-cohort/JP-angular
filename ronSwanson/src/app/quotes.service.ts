import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuotesService {

  constructor(private _http: Http) { }

  retrieveQuote() {
    return this._http.get("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .map(data => data.json())
      .toPromise();
  }

  retrieveManyQuotes(number) {
    return this._http.get(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/${number}`)
      .map(data => data.json())
      .toPromise();
  }

}
