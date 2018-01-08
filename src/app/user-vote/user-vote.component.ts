import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-vote',
  templateUrl: './user-vote.component.html',
  styleUrls: ['./user-vote.component.css']
})
export class UserVoteComponent implements OnInit {
  uvotes = 0;
  dvotes = 0;

  @Output() deleteThisQuote = new EventEmitter<boolean>();

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
