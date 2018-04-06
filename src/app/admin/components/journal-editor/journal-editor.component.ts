import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { JournalService } from './../../../services/journal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-journal-editor',
  templateUrl: './journal-editor.component.html',
  styleUrls: ['./journal-editor.component.sass']
})
export class JournalEditorComponent implements OnInit {

    public uploader:FileUploader = new FileUploader({url:'http://localhost:6789/uploadEntry'});

    editToggle = {
      title: false,
      goal: false,
      learned: false,
      thoughts: false,
      emotion: false,
      content: false
    }

    entry = null;

    validEntry = true;
    // on validation this will be set to false until contitions are met

    saveData = (e, val) => {
      this.entry[val] = e.target.previousElementSibling.value;
    }

    saveContent = (e) => {
       this.entry.content = e.target.previousElementSibling.value.split('\n');
    }

    removeTag = (i) => {
      this.entry._tags.splice(i, 1);
    }
    addTag = (e) => {
      this.entry._tags.push(e.target.previousElementSibling.value);
      e.target.previousElementSibling.value = "";
    }

    uploadAndSave = () => {
      this.uploader.uploadAll();
    }

  constructor(private journalService: JournalService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.uploader.onBuildItemForm = (fileItem: any, form: any) => { if (this.entry) form.append('data', JSON.stringify(this.entry)); }

    this.route.params.subscribe(params => {
      console.log(params);
      this.journalService.getJournal(params['id']).subscribe(entry => {
        if(entry){
          this.entry = entry;
        }else{
          this.entry = {
            title: "",
            date: "2000-01-01",
            content: [""],
            productivity: "",
            goal: "",
            learned: "",
            img: {
            },
            thoughts: "",
            emotion: "",
            emotionimg: "",
            _tags: [""]
          };
        }
      })
    })
  }
}
