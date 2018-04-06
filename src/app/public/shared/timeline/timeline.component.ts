import { Component, OnInit } from '@angular/core';
import { JournalService } from './../../../services/journal.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass']
})
export class TimelineComponent implements OnInit {

  timeline = null;

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.journalService.getTimeline().subscribe(timeline => {
      if(timeline){
        console.log(timeline);
        this.timeline = timeline;
      }else{
        this.timeline = {
          productivity: 1,
          date: "2018-02-02"
        }
      }
    })
  }

}
