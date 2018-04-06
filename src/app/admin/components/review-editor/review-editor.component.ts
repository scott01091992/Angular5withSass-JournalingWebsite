import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ReviewService } from './../../../services/review.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-editor',
  templateUrl: './review-editor.component.html',
  styleUrls: ['./review-editor.component.sass']
})
export class ReviewEditorComponent implements OnInit {

    public uploader:FileUploader = new FileUploader({url:'http://localhost:6789/uploadreview'});

    editToggle = {
      title: false,
      description: false,
      recommended: false,
      content: false
    }

    review = null;

    validreview = true;

    saveData = (e, val) => {
      this.review[val] = e.target.previousElementSibling.value;
    }

    saveContent = (e) => {
       this.review.content = e.target.previousElementSibling.value.split('\n');
    }

    removeTag = (i) => {
      this.review._tags.splice(i, 1);
    }
    addTag = (e) => {
      this.review._tags.push(e.target.previousElementSibling.value);
      e.target.previousElementSibling.value = "";
    }

    removePro = (i) => {
      this.review._pros.splice(i, 1);
    }
    addPro = (e) => {
      this.review._pros.push(e.target.previousElementSibling.value);
      e.target.previousElementSibling.value = "";
    }

    removeCon = (i) => {
      this.review._cons.splice(i, 1);
    }
    addCon = (e) => {
      this.review._cons.push(e.target.previousElementSibling.value);
      e.target.previousElementSibling.value = "";
    }

    uploadAndSave = () => {
      this.uploader.uploadAll();
    }

  constructor(private ReviewService: ReviewService,private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.uploader.onBuildItemForm = (fileItem: any, form: any) => { if (this.review) form.append('data', JSON.stringify(this.review)); }
    this.route.params.subscribe(params => {
      this.ReviewService.getReview(params['id']).subscribe(review => {
        if(review){
          this.review = review;
        }else{
          this.review = {
            title: "",
            date: "2000-01-01",
            description: "",
            content: [""],
            rating: 0,
            _tags: [""],
            _pros: [""],
            _cons: [""],
            recommended: "",
            img: {
            }
          }
        }
      })
    })
  }

}
