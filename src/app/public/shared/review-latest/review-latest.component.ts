import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-latest',
  templateUrl: './review-latest.component.html',
  styleUrls: ['./review-latest.component.sass']
})
export class ReviewLatestComponent implements OnInit {

  review = {
    title: "Entry Title",
    date: "Entry Date",
    description: "This is the description of the game that i reviewed",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus interdum enim quis euismod. Phasellus nibh ipsum, tristique sit amet laoreet id, tempor ut justo. Sed id turpis erat. Fusce convallis turpis in mauris aliquet, in rutrum nisi sollicitudin. Duis lectus diam, vestibulum sed lorem in, vulputate dignissim lectus. Mauris tortor metus, sagittis eu gravida a, consectetur ut odio. Phasellus sollicitudin libero vel turpis efficitur, sed condimentum dui maximus. Phasellus id tincidunt turpis. In sapien sapien, eleifend sed libero vel, dignissim laoreet eros. Phasellus convallis felis at nisi congue sagittis. Pellentesque rutrum sagittis massa quis placerat. Cras nulla dolor, tristique a condimentum a, vestibulum eu magna. Sed at porttitor erat. Maecenas euismod tortor ligula, ac convallis augue egestas at. In in laoreet tortor, et mollis lorem. Pellentesque in libero non nisl commodo commodo sit amet ut eros. Aliquam gravida leo at elit faucibus, porta egestalis",
    rating: 87,
    tags: ["Tag", "Tag", "Tag", "Tag", "Tag"],
    pros: ["this is a pro for the game", "this is a pro for the game", "this is a pro for the game"],
    cons: ["this is a con for the game", "this is a con for the game", "this is a con for the game"],
    recommended: "i would recommend this game to this kind of gamer for this reason",
    imgpath: "./../../../../assets/reviews/thumbnailreviewplaceholder.png"
  };

  constructor() { }

  ngOnInit() {
  }

}
