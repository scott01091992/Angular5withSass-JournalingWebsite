import { Component, OnInit, Input } from '@angular/core';
import { ReviewService } from './../../../services/review.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-review-preview',
  templateUrl: './review-preview.component.html',
  styleUrls: ['./review-preview.component.sass']
})
export class ReviewPreviewComponent implements OnInit {

  @Input('review') review;

  base64Img = "";

  constructor(private domSanitizer: DomSanitizer) { }

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
    console.log(this.review);
    let base64 = _arrayBufferToBase64(this.review.img.data.data);

    this.base64Img = "data:image/jpg;base64, " + base64;

  }
}
