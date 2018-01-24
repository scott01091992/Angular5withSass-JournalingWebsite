import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal-latest',
  templateUrl: './journal-latest.component.html',
  styleUrls: ['./journal-latest.component.sass']
})
export class JournalLatestComponent implements OnInit {

  entry = {
    title: "Entry Title",
    date: "Entry Date",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus interdum enim quis euismod. Phasellus nibh ipsum, tristique sit amet laoreet id, tempor ut justo. Sed id turpis erat. Fusce convallis turpis in mauris aliquet, in rutrum nisi sollicitudin. Duis lectus diam, vestibulum sed lorem in, vulputate dignissim lectus. Mauris tortor metus, sagittis eu gravida a, consectetur ut odio. Phasellus sollicitudin libero vel turpis efficitur, sed condimentum dui maximus. Phasellus id tincidunt turpis. In sapien sapien, eleifend sed libero vel, dignissim laoreet eros. Phasellus convallis felis at nisi congue sagittis. Pellentesque rutrum sagittis massa quis placerat. Cras nulla dolor, tristique a condimentum a, vestibulum eu magna. Sed at porttitor erat. Maecenas euismod tortor ligula, ac convallis augue egestas at. In in laoreet tortor, et mollis lorem. Pellentesque in libero non nisl commodo commodo sit amet ut eros. Aliquam gravida leo at elit faucibus, porta egestalis",
    goal: "The goal of the day will go here",
    happiness: "8",
    thoughts: "You can put your additional thoughts and feelings here, the overall mood",
    tags: ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"]
  };

  constructor() { }

  ngOnInit() {
  }

}
