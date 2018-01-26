import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.sass']
})
export class ObjectivesComponent implements OnInit {

  goals = {
    shortTerm: [
      "Build A Website with a CMS",
      "Learn about .NET architecture",
      "Practice Layout Design and Logo Design",
      "Consistently push content to github"
    ],
    longTerm: [
      "Get a Job as a Developer",
      "Finish School",
      "Teach people how to code"
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
