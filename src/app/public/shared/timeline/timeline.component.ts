import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass']
})
export class TimelineComponent implements OnInit {

  timeline = [
    {productivity: 7, date: "01/09"},
    {productivity: 4, date: "01/10"},
    {productivity: 5, date: "01/11"},
    {productivity: 9, date: "01/12"},
    {productivity: 6, date: "01/13"},
    {productivity: 7, date: "01/14"},
    {productivity: 4, date: "01/15"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
