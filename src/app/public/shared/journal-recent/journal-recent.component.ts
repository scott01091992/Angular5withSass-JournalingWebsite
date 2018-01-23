import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal-recent',
  templateUrl: './journal-recent.component.html',
  styleUrls: ['./journal-recent.component.sass']
})
export class JournalRecentComponent implements OnInit {

  entries = [
    {title: "Entry Title", date: "Entry Date"},
    {title: "Entry Title", date: "Entry Date"},
    {title: "Entry Title", date: "Entry Date"},
    {title: "", date: ""},
    {title: "", date: ""},
    {title: "", date: ""},
    {title: "", date: ""},
    {title: "", date: ""}
  ];

  constructor() { }

  ngOnInit() {
  }

}
