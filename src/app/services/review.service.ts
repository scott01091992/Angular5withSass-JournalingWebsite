import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReviewService {

  constructor(private http: HttpClient) { }

  getReview(id) {
    if(id){
      return this.http.get('review/'+id);
    }else{
      return this.http.get('latestReview');
    }
  }

  getRecentReviews() {
    return this.http.get('/recentReviews');
  }

  getAllReviews() {
    return this.http.get('/allReviews');
  }

}
