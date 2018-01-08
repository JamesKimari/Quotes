import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Amelia Earhart',
    'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.', 100, 12),
    new Quote(2, 'Walt Whitman', 'Keep your face always toward the sunshine - and shadows will fall behind you.', 200, 3),
    new Quote(3, 'Albert Einstein', "You can't blame gravity for falling in love.", 502, 1)
  ];

  @Output() deleteThisQuote = new EventEmitter<boolean>();



  constructor() { }

  ngOnInit() {
  }

}
