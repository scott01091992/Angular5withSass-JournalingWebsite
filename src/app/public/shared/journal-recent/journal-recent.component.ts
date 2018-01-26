import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal-recent',
  templateUrl: './journal-recent.component.html',
  styleUrls: ['./journal-recent.component.sass']
})
export class JournalRecentComponent implements OnInit {

  entries = [
    {title: "Chinese Food", date: "01/24/2018"},
    {title: "Im 26 I Guess", date: "01/12/2018"},
    {title: "A new year doesnt feel right", date: "01/03/2018"},
    {title: "Christmas Time", date: "12/25/2017"},
    {title: "Friend Christmas", date: "12/20/2018"},
    {title: "Cant Believe its December", date: "12/1/2018"},
    {title: "Bills are Stressful", date: "11/4/2017"},
    {title: "First of the Month", date: "11/1/2017"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
