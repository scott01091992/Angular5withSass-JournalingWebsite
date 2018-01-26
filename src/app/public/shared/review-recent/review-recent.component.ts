import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-recent',
  templateUrl: './review-recent.component.html',
  styleUrls: ['./review-recent.component.sass']
})
export class ReviewRecentComponent implements OnInit {

  reviews = [
    {title: "Path of Exile", date: "01/24/2018"},
    {title: "Jumanji", date: "01/20/2018"},
    {title: "Black Desert Online", date: "01/02/2018"},
    {title: "The Division", date: "12/03/2017"},
    {title: "Call of Duty: WWII", date: "11/22/2017"},
    {title: "Star Wars: Rogue One", date: "9/21/2017"},
    {title: "Divinity Original Sin II", date: "08/10/2017"},
    {title: "Secret Hitler", date: "07/27/2017"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
