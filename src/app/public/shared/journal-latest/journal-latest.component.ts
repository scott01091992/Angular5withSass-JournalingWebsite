import { Component, OnInit } from '@angular/core';
import { JournalService } from './../../../services/journal.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-journal-latest',
  templateUrl: './journal-latest.component.html',
  styleUrls: ['./journal-latest.component.sass']
})
export class JournalLatestComponent implements OnInit {

  entry = null;
  base64Img = "";
  constructor(private domSanitizer: DomSanitizer, private journalService: JournalService, private route: ActivatedRoute) { }

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
       this.journalService.getJournal(params['id']).subscribe(entry => {
         console.log(entry);
         this.entry = entry;
         let base64 = _arrayBufferToBase64(this.entry.img.data.data);
         this.base64Img = "data:image/jpg;base64, " + base64;
       });
    });



  }

}
