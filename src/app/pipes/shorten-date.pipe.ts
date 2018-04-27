import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'shortenDate'
})
export class ShortenDatePipe implements PipeTransform {

  transform(val: any): any {
    let m = moment(val, "YYYY-MM-DD");
    let date = m.format("MM/DD");
    return date;
  }

}
