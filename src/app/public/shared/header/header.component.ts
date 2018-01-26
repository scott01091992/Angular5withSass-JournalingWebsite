import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  username = "Brandon Scott";
  aspiration = "Developer & Designer";

  constructor() { }

  ngOnInit() {
  }

}
