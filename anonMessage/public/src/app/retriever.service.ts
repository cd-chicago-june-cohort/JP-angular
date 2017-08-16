import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RetrieverService {

  constructor(private _http: Http) { }

  retrieveAll() {
    return this._http.get('/api/show')
    .map(data => data.json())
    .toPromise();
  }

  create(newNote) {
    console.log('MADE IT TO CREATE IN THE SERVICE');
    return this._http.post('/api/create', newNote)
    .map(data => data.json())
    .toPromise();
  }
  


}
