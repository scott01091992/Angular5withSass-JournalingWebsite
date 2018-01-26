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
    thumbnail: "https://img.youtube.com/vi/wwGeCfWc100/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=wwGeCfWc100"
  },
  {
    thumbnail: "https://img.youtube.com/vi/5CR-h-rFCkg/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=5CR-h-rFCkg"
  },
  {
    thumbnail: "https://img.youtube.com/vi/NSgh1UVfKTU/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=NSgh1UVfKTU"
  }
]

  constructor() { }

  ngOnInit() {
  }

}
