import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

let testingMoment = moment();
let testingEntries = [
  {date: "01/02/2018"},
  {date: "01/09/2018"},
  {date: "01/18/2018"},
  {date: "01/20/2018"},
  {date: "01/22/2018"},
  {date: "01/27/2018"}
];

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
        calendarObj.calendar.push({isDay: true, dayNum: j+1, hasEntry: true});
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

  return calendarObj;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})

export class CalendarComponent implements OnInit {

  calendarObj;
  calendarColor;

  constructor() {
    this.calendarColor = (dayConditional: boolean, entryConditional: boolean) => {
      if(dayConditional != true){
        return {'background-color': 'rgba(60, 165, 255, .2)'};
      }else if(entryConditional == true){
        return {'background-color': 'rgba(229, 160, 64, .2)'};
      }else{
        return {'background-color': 'rgba(250, 250, 250, .2)'};
      }
    };
    this.calendarObj = createCalendar(testingMoment, testingEntries);
  }

  ngOnInit() {

  }

}
