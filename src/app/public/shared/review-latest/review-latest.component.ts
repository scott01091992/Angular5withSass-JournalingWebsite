import { Component, OnInit } from '@angular/core';
import { ReviewService } from './../../../services/review.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-latest',
  templateUrl: './review-latest.component.html',
  styleUrls: ['./review-latest.component.sass']
})
export class ReviewLatestComponent implements OnInit {

  review = null;

  base64Img = "";

  constructor(private reviewService: ReviewService, private domSanitizer: DomSanitizer, private route: ActivatedRoute) { }

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
    this.route.params.subscribe(params => {
      this.reviewService.getReview(params['id']).subscribe(review => {
        this.review = review;
        let base64 = _arrayBufferToBase64(this.review.img.data.data);
        this.base64Img = "data:image/jpg;base64, " + base64;
      });
    });
  }

}
