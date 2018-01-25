import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-recent',
  templateUrl: './review-recent.component.html',
  styleUrls: ['./review-recent.component.sass']
})
export class ReviewRecentComponent implements OnInit {

  reviews = [
    {title: "Review Title", date: "Review Date"},
    {title: "Review Title", date: "Review Date"},
    {title: "Review Title", date: "Review Date"},
    {title: "Review Title", date: "Review Date"},
    {title: "", date: ""},
    {title: "", date: ""},
    {title: "", date: ""},
    {title: "", date: ""}
  ];

  constructor() { }

  ngOnInit() {
  }

}
