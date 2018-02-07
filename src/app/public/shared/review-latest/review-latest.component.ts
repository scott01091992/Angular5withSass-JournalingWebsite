import { Component, OnInit } from '@angular/core';
import { ReviewService } from './../../../services/review.service';

@Component({
  selector: 'app-review-latest',
  templateUrl: './review-latest.component.html',
  styleUrls: ['./review-latest.component.sass']
})
export class ReviewLatestComponent implements OnInit {

  review = null;

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {

    this.reviewService.getLatestReview().subscribe(review => {
      this.review = review;
    });

  }

}
