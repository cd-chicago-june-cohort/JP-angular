import { Component, OnInit } from '@angular/core';
import { Note } from "./note";
import { RetrieverService } from './retriever.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  notes;

  note = new Note();

  constructor(private _retrieverService: RetrieverService) {}

  createNote() {
    console.log('MADE IT TO CREATE NOTE FUNCTION IN COMPONENT');
    this._retrieverService.create(this.note);
    this.showNotes();
    this.note = new Note();
  }

  ngOnInit() {
    this.showNotes();
  }

  showNotes() {
    this._retrieverService.retrieveAll()
    .then(eggplant => this.notes = eggplant)
    .catch(err => console.log(err));
    console.log(this.notes);
  }


}
