import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal-latest',
  templateUrl: './journal-latest.component.html',
  styleUrls: ['./journal-latest.component.sass']
})
export class JournalLatestComponent implements OnInit {

  entry = {
    title: "Chinese Food and Code",
    date: "01/24/2018",
    content: "Today I woke up relatively early, considering the time I decided to go to sleep. I started the day with my mushroom elixir and a soylent. That gave me enough brain power to code for 7 hours without a break. I started to feel fatigue and needed some food, so I ordered chinese food on Uber Eats. The driver got lost and wasted a good hour of my time. Now that I have eaten I have enough food for another meal later on today. I have just a few more things to do for my Homepage now that all the components have been built. I'm going to be testing a bunch of different types of data in order to understand what works and what doesn't when making more content for my site. I really hope that this site works out and gets me on the map. I have never built out a site this complex as far as content management goes, so either way it will be a good addition to my github profile. Later on today I would like to apply for that field investigation position. In theory, that is a job that ive dreamed of having for a really long time. My brain is still running slowly right now, so I might take a break from the code after I finish building out a journal entry and a review.",
    productivity: "8",
    goal: "My goal of the day is to finish my homepage so I can start working on testing data sets.",
    learned: "Today I learned a lot about flexbox, css trim, negative margins, and naming conventions for sass variables.",
    imgpath: "./../../../../assets/entryimgs/beachimg.jpeg",
    thoughts: "Music seems to be more impactful for coding than listening to netflix in the background. It is just too easy to get distracted.",
    emotion: "HAPPY",
    emotionimg: "./../../../../assets/static/happy.png",
    tags: ["Chinese Food", "Coding", "CSS", "The Office", "Mushroom Elixir", "Cherry Gum"]
  };

  constructor() { }

  ngOnInit() {
  }

}
