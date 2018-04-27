import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalService {

  constructor(private http: HttpClient) { }

  getJournal(id) {
    if(id){
      return this.http.get('journal/'+id);
    }else{
      return this.http.get('latestJournal');
    }
  }

  getRecentEntries() {
    return this.http.get('/recentEntries');
  }

  getTimeline() {
    return this.http.get('/timeline');
  }

  getCalendar(month, year) {
    return this.http.get('/calendar/'+year+'-'+month);
  }

}
