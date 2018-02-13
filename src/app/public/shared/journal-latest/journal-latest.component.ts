import { Component, OnInit } from '@angular/core';
import { JournalService } from './../../../services/journal.service';

@Component({
  selector: 'app-journal-latest',
  templateUrl: './journal-latest.component.html',
  styleUrls: ['./journal-latest.component.sass']
})
export class JournalLatestComponent implements OnInit {

  entry = null;

  constructor(private journalService: JournalService) { }

  ngOnInit() {

    this.journalService.getLatestJournal().subscribe(entry => {
      this.entry = entry;
    })

  }

}
