import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { JournalService } from './../../../services/journal.service';
import { Router } from '@angular/router';

let createDateArr = (arr) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    let temp = moment(arr[i].date);
    newArr.push(temp.date());
  }
  return newArr;
}

let createCalendar = (moment, entries) => {
  let convertedEntries = createDateArr(entries);
  let calendarObj = {
    month: moment.format("MMMM"),
    year: moment.format("YYYY"),
    calendar: []
  };
  //add empty precursor days
  for(let i = 0; i < moment.startOf('month').day(); i++){
    calendarObj.calendar.push({isDay: false, hasEntry: false});
  }
  //fill calendar
  for(let j = 0; j < moment.daysInMonth(); j++){
    let entry = false;
    for(let k = 0; k < entries.length; k++){
      if(convertedEntries[k]==j+1 && entry == false){
        entry = true;
        calendarObj.calendar.push({isDay: true, dayNum: j+1, hasEntry: true, id: entries[k]._id});
      }
    }
    if(entry == false){
      calendarObj.calendar.push({isDay: true, dayNum: j+1, hasEntry: false});
    }
  }
  //add empty postcursor days
  for(let i = 0; i < 42-(moment.startOf('month').day()+moment.daysInMonth()); i++){
    calendarObj.calendar.push({isDay: false, dayNum: "", hasEntry: false});
  }
  console.log(calendarObj);
  return calendarObj;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})

export class CalendarComponent implements OnInit {

  calendarObj;
  calDate;
  calendarColor;
  render = false;

  navigateToEntry = (id) => {
    if(id){
      this.router.navigate(['/journal', id]);
    }
  };

  nextMonth = () => {
    this.calDate.add(1, 'month');
    let month = this.calDate.format("MM");
    let year = this.calDate.format("YYYY");
    this.journalService.getCalendar(month, year).subscribe(cal => {
      console.log(cal);
      if(cal){
        this.calendarObj = createCalendar(this.calDate , cal);
        this.render = true;
      }else{
        this.calendarObj = createCalendar(this.calDate , []);
      }
    })
  }

  previousMonth = () => {
    this.calDate.subtract(1, 'month');
    let month = this.calDate.format("MM");
    let year = this.calDate.format("YYYY");
    this.journalService.getCalendar(month, year).subscribe(cal => {
      console.log(cal);
      if(cal){
        this.calendarObj = createCalendar(this.calDate, cal);
        this.render = true;
      }else{
        this.calendarObj = createCalendar(this.calDate, []);
      }
    })
  }

  constructor(private journalService: JournalService, private router: Router) {
    this.calendarColor = (dayConditional: boolean, entryConditional: boolean) => {
      if(dayConditional != true){
        return {'background-color': 'rgba(60, 165, 255, .2)'};
      }else if(entryConditional == true){
        return {'background-color': 'rgba(229, 160, 64, .2)'};
      }else{
        return {'background-color': 'rgba(250, 250, 250, .2)'};
      }
    };
  }

  ngOnInit() {
    this.calDate = moment();
    let month = this.calDate.format("MM");
    let year = this.calDate.format("YYYY");
    console.log(this.calDate);
    this.journalService.getCalendar(month, year).subscribe(cal => {
      if(cal){
        this.calendarObj = createCalendar(this.calDate, cal);
        this.render = true;
      }else{
        this.calendarObj = createCalendar(this.calDate, []);
      }
    })
  }

}
