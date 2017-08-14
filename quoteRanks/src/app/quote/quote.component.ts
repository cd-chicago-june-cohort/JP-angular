import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() thisQuote;
  @Input() index;
  @Output() upvoteEvent = new EventEmitter();
  @Output() downvoteEvent = new EventEmitter();
  @Output() destroyEvent = new EventEmitter();

  constructor() { }

  initUpvote() {
    this.upvoteEvent.emit(this.index);
  }

  initDownvote() {
    this.downvoteEvent.emit(this.index);
  }

  destroy() {
    this.destroyEvent.emit(this.index);
  }

  ngOnInit() {
  }

}
