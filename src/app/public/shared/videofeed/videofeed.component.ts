import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videofeed',
  templateUrl: './videofeed.component.html',
  styleUrls: ['./videofeed.component.sass']
})
export class VideofeedComponent implements OnInit {

  videos = [{
    thumbnail: "https://img.youtube.com/vi/_451w4QW6hc/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=_451w4QW6hc"
  },
  {
    thumbnail: "https://img.youtube.com/vi/_451w4QW6hc/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=_451w4QW6hc"
  },
  {
    thumbnail: "https://img.youtube.com/vi/_451w4QW6hc/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=_451w4QW6hc"
  },
  {
    thumbnail: "https://img.youtube.com/vi/_451w4QW6hc/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=_451w4QW6hc"
  }
]

  constructor() { }

  ngOnInit() {
  }

}
