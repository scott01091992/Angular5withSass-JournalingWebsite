import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-latest',
  templateUrl: './review-latest.component.html',
  styleUrls: ['./review-latest.component.sass']
})
export class ReviewLatestComponent implements OnInit {

  review = {
    title: "Path of Exile",
    date: "01/23/2018",
    description: "An multiplayer ARPG all about complex spell creation and character building in a dark fantasy environment.",
    content: "Path of Exile is fantastic addition to the PC ARPG pool. The game features a complex character building system on top of a deep spell creation system. This combination allows for some of the most entertaining character building in an ARPG that i've seen. Taking a basic spell and combining it with other modifiers to make a silly or devastating version always feels good. The enemy types are varied enough to keep you interested and the ability to constantly modify your existing gear makes sure you never feel a drought in your character progression. With a cost of zero, this free to play game has a ton to offer. The setting will remind you a lot of diablo, so there is nothing unique in that respect, but if gear and skills are more important to you than story telling and graphics then this is a must play. The multiplayer is well implemented and the controls feel good as well. Path of Exile is a fantastic game, that I will continue to play with my friends for sure.",
    rating: 88,
    tags: ["ARPG", "Free to Play", "Dark Fantasy", "Character Building", "Multiplayer"],
    pros: ["Endless possible builds for your character", "Fast paced action that stays challenging", "Free to Play and endless hours of entertainment"],
    cons: ["Graphics are nothing impressive", "Lots of RNG involved"],
    recommended: "I would recommend this to any arpg fan who isn't in it for flashy graphics and deep story",
    imgpath: "./../../../../assets/reviewimgs/thumbnailreviewplaceholder.png"
  };

  constructor() { }

  ngOnInit() {
  }

}
