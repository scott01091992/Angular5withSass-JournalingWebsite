import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-journal-preview',
  templateUrl: './journal-preview.component.html',
  styleUrls: ['./journal-preview.component.sass']
})
export class JournalPreviewComponent implements OnInit {

  @Input('entry') entry; 

  constructor() { }

  ngOnInit() {

  }

}
