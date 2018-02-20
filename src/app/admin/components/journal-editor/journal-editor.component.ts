import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-journal-editor',
  templateUrl: './journal-editor.component.html',
  styleUrls: ['./journal-editor.component.sass']
})
export class JournalEditorComponent implements OnInit {

    public uploader:FileUploader = new FileUploader({url:'http://localhost:6789/uploadJournal'});

    editToggle = {
      title: false,
      goal: false,
      learned: false,
      thoughts: false,
      emotion: false,
      content: false
    }

    entry = {
      title: "Always a Strong Start",
      date: "2018-02-17",
      content: [
          "This morning was the start of my new planned out routine. I went to bed at 9:30pm in preparation for the new wake up time; 6:00am. I woke up a little tired so I make an activity swap, moving a shower and coffee behind a 30 minute news reading period and allowed my mind to wake up with a few news articles served up by Google's relevant article feed. I also listened to a good 45 minutes of the Presidental State of the Union. Sounded like Trump was making all kinds of positive changes, but without any research of my own to back up any statements it's hard for me to make any distiction between truth, lies, or just out of context exaggeration. I never have been interested in politics or playing favorites by grouping myself up with a political party.",
          "I followed my coffee up with 30 minutes of meditation to bring my mind into the present and avoid spending to much of my time in thoughts about the past or future. I've found that if I can be present I can take action and make things happen in a delibrate way, but if I am thinking of the future or past I will simply do things on a sort of autopilot. Which is not how I want to live my life.",
          "I felt calm and collected after meditaion and a bit of brain exercise using lumosity and moved on to stretching and exercise for 45 minutes in order to prevent any long term damage to my physical being, since I spend a lot of time on the computer and do not have much incentive to leave my workspace right now.",
          "My next activity is planning, and I was unsure what planning to do, so I simply spent some time editing my notes and oranizing my trello boards. I made a note about how I should consider what I really need to take care of during my planning time. I had a few extra minutes to spare and opened UDemy to my ES6 course. Learning small segments at a time is how I intend on getting through the courses while still having the time to code my real projects out. In the past I tried to prioritize courses over code and I just felt like my time could be better spent in the reverse order. Todays UDemy lecture was on using the Set datatype and how its unique value only feature can be quite useful in the right situation.",
          "Now its time for a major block in my schedule set aside for coding. In this case I am currently testing out different content possibilities in place of my temporary data for my journal entries. That is what this entry is for, I am testing out using linebreaks and making the content length much greater than my testing data. The idea is to push the data possibilities to the limits and then take notes on where those limits are for future content to be within the constraints. I cloned my repository in order to set up a testing area for new journal entries to be viewed in the real code before I have it deployed or updated. I would like to have all the dimensions tested and documented for all possible views in the future, before the site goes live. However, in order to have enough content to launch the site I want to start making these entries while still in development.",
          "Hopefully that all made sense. I will likely go back and edit these before they are finalized."
        ],
      productivity: "8",
      goal: "Complete a journal entry for the day, test constraints for future journal entries and set up MongoDB on the backend to serve my content to my components",
      learned: "Didnt learn anything",
      imgpath: "./../../../../assets/entryimgs/coffeeCode.jpg",
      thoughts: "I definitely have not exercised enough recently. I am sore after just 45 minutes of physical training",
      emotion: "Tired",
      emotionimg: "./../../../../assets/static/blah.png",
      tags: ["Sleep", "Reset", "Content Creation", "Planning", "Early Development", "Self Improvement"]
    };

    saveData = (e, val) => {
      this.entry[val] = e.target.previousElementSibling.value;
    }

    saveContent = (e) => {
       this.entry.content = e.target.previousElementSibling.value.split('\n');
    }

    removeTag = (i) => {
      this.entry.tags.splice(i, 1);
    }
    addTag = (e) => {
      this.entry.tags.push(e.target.previousElementSibling.value);
      e.target.previousElementSibling.value = "";
    }

  constructor() { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item:any, response:any, status:any, headers:any) => {
      console.log(this.uploader);
    };
  }

}
