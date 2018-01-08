import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-user-vote',
  templateUrl: './user-vote.component.html',
  styleUrls: ['./user-vote.component.css']
})
export class UserVoteComponent implements OnInit {

  @Output() isComplete = new EventEmitter<boolean>();

  quotes = [
    new Quote(1, 'Amelia Earhart',
      'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.', 100, 12,
      new Date(2017, 12, 12)),
    new Quote(2, 'Walt Whitman', 'Keep your face always toward the sunshine - and shadows will fall behind you.', 200, 3, new Date(2016, 5, 19)),
    new Quote(3, 'Albert Einstein', 'You cant blame gravity for falling in love.', 502, 1, new Date(2017, 6, 5))
  ];

  uvotes = 0;
  dvotes = 0;


  upVote() {
    this.uvotes = this.uvotes + 1;
  }

  downVote() {
    this.dvotes = this.dvotes + 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
