import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Quote
} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Amelia Earhart',
      'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.',
      new Date(2017, 12, 12)),
    new Quote(2, 'Walt Whitman', 'Keep your face always toward the sunshine - and shadows will fall behind you.', new Date(2016, 5, 19)),
    ];

  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete this quote?`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

addNewQuote(quote) {
  const quoteLength = this.quotes.length;
  quote.id = quoteLength + 1;
  quote.creationTime = new Date(quote.creationTime);
  this.quotes.push(quote)
}

  constructor() {}

  ngOnInit() {}
}