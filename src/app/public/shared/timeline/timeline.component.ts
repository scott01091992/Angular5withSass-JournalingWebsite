import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass']
})
export class TimelineComponent implements OnInit {

  timeline = [
    {happiness: 7, date: "01/09"},
    {happiness: 4, date: "01/10"},
    {happiness: 5, date: "01/11"},
    {happiness: 9, date: "01/12"},
    {happiness: 6, date: "01/13"},
    {happiness: 7, date: "01/14"},
    {happiness: 4, date: "01/15"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
