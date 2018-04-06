import { Component, OnInit } from '@angular/core';
import { ReviewService } from './../../../services/review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-recent',
  templateUrl: './review-recent.component.html',
  styleUrls: ['./review-recent.component.sass']
})
export class ReviewRecentComponent implements OnInit {

  reviews = null;

  navigateToReview = (id) => {
    if(id){
      this.router.navigate(['/reviews', id]);
    }
  };

  constructor(private reviewService: ReviewService, private router: Router) { }

  ngOnInit() {

    this.reviewService.getRecentReviews().subscribe(reviews => {
      if(reviews){
        this.reviews = reviews;
      }else{
        this.reviews = {
          title: "",
          date: "2000-01-01"
        }
      }
    })
  }

}
