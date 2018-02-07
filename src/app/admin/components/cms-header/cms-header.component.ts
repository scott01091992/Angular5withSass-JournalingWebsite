import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cms-header',
  templateUrl: './cms-header.component.html',
  styleUrls: ['./cms-header.component.sass']
})
export class CmsHeaderComponent implements OnInit {

  username = "Brandon Scott";
  aspiration = "Developer";

  constructor() { }

  ngOnInit() {
  }

}
