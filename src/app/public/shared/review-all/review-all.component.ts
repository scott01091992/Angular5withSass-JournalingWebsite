import { Component, OnInit } from '@angular/core';
import { ReviewService } from './../../../services/review.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-all',
  templateUrl: './review-all.component.html',
  styleUrls: ['./review-all.component.sass']
})
export class ReviewAllComponent implements OnInit {

  reviews = null;

  navigateToReview = (id) => {
    if(id){
      this.router.navigate(['/reviews', id]);
    }
  };

  constructor(private reviewService: ReviewService, private domSanitizer: DomSanitizer, private router: Router) {
   }

  ngOnInit() {
    function _arrayBufferToBase64( buffer ) {
      var binary = '';
      var bytes = new Uint8Array( buffer );
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
          binary += String.fromCharCode( bytes[ i ] );
      }
      return window.btoa( binary );
    }

    this.reviewService.getAllReviews().subscribe(reviews => {
      this.reviews = reviews;
      for(let i = 0; i < this.reviews.length; i++){
        let base64 = _arrayBufferToBase64(this.reviews[i].img.data.data);
        this.reviews[i].img.data.data = "data:image/jpg;base64, " + base64;
      }
    });

  }

}
