import { Component, OnInit } from '@angular/core';

import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-journal-editor',
  templateUrl: './journal-editor.component.html',
  styleUrls: ['./journal-editor.component.sass']
})
export class JournalEditorComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url:'/uploadInterest'});


  constructor() { }

  ngOnInit() {
    // this.uploader.onSuccessItem = (item:any, response:any, status:any, headers:any) => {
    //   console.log(this.uploader);
    //   this.profile.interests[this.uploader.queue[0].formData[0].key].imgpath = "./../../../../assets/interests/"+this.uploader.queue[0].formData[0].filename;
    // };
  }

}
