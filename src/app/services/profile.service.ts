import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUserProfile() {
    return this.http.get('/userProfile');
  }

  getObjectives() {
    return this.http.get('/objectives');
  }

}
