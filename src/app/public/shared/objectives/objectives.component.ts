import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.sass']
})
export class ObjectivesComponent implements OnInit {

  goals = {
    shortTerm: [
      "This is a short term goal",
      "This is a short term goal",
      "This is a short term goal",
      "This is a short term goal"
    ],
    longTerm: [
      "This is a long term goal",
      "This is a long term goal",
      "This is a long term goal"
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
