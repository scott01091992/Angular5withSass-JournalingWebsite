import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'fullDate'
})
export class FullDatePipe implements PipeTransform {

  transform(val: any): any {
    let m = moment(val, "YYYY-MM-DD");
    let date = m.format("MMM Do");
    return date;
  }

}
