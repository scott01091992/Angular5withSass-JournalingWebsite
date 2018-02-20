import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-all',
  templateUrl: './review-all.component.html',
  styleUrls: ['./review-all.component.sass']
})
export class ReviewAllComponent implements OnInit {

  reviewThumbnails = [
    {title: "Crysis", imgpath: "crysis.jpg"},
    {title: "Deus Ex: Human Revolution", imgpath: "deusexhr.jpg"},
    {title: "Diablo 3", img: "diablo3.jpg"},
    {title: "John Wick 2", imgpath: "johnwick2.jpg"},
    {title: "Pirates of the Caribbean", imgpath: "piratesofthecarribbean.jpg"},
    {title: "Starcraft 2", imgpath: "starcraft2.jpg"},
    {title: "The Shining", imgpath: "theshining.jpg"},
    {title: "Titanfall", imgpath: "titanfall.jpg"},
    {title: "World War Z", imgpath: "worldwarz.jpg"},
    {title: "XCOM 2", imgpath: "xcom2.jpg"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
