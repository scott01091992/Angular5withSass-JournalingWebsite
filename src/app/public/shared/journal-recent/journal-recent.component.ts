import { Component, OnInit } from '@angular/core';
import { JournalService } from './../../../services/journal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journal-recent',
  templateUrl: './journal-recent.component.html',
  styleUrls: ['./journal-recent.component.sass']
})
export class JournalRecentComponent implements OnInit {

  entries = null;

  constructor(private journalService: JournalService, private router: Router) { }

  navigateToJournal = (id) => {
    this.router.navigate(['/journal', id]);
  }

  ngOnInit() {
    this.journalService.getRecentEntries().subscribe(entries => {
      if(entries){
        this.entries = entries;
        console.log(entries);
      }else{
        this.entries = {
          title: "",
          date: "2000-01-01"
        }
      }
    })
  }

}
