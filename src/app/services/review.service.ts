import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReviewService {

  constructor(private http: HttpClient) { }

  getLatestReview() {
    return this.http.get('/latestReview');
  }

}
