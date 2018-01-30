import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-all',
  templateUrl: './review-all.component.html',
  styleUrls: ['./review-all.component.sass']
})
export class ReviewAllComponent implements OnInit {

  reviewThumbnails = [
    {title: "Crysis", img: "crysis.jpg"},
    {title: "Deus Ex: Human Revolution", img: "deusexhr.jpg"},
    {title: "Diablo 3", img: "diablo3.jpg"},
    {title: "Fast and Furious", img: "fastandfurious.jpg"},
    {title: "John Wick 2", img: "johnwick2.jpg"},
    {title: "Kingdom Hearts 2", img: "kingdomhearts2.jpg"},
    {title: "Pirates of the Caribbean", img: "piratesofthecarribbean.jpg"},
    {title: "Shadow of the Colossus", img: "shadowofthecolossus.jpg"},
    {title: "Starcraft 2", img: "starcraft2.jpg"},
    {title: "The Shining", img: "theshining.jpg"},
    {title: "Titanfall", img: "titanfall.jpg"},
    {title: "Trine", img: "trine.jpg"},
    {title: "World War Z", img: "worldwarz.jpg"},
    {title: "XCOM 2", img: "xcom2.jpg"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
