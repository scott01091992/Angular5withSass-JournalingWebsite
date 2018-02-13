import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../../services/profile.service';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.sass']
})

export class ProfileEditorComponent implements OnInit {

  profile = null;

  toggleEdit = {
    name: false,
    dob: false,
    location: false,
    description: false
  }

  saveAboutData = (e, key) => {this.profile.about[key] = e.target.previousElementSibling.value;}
  saveDescription = (e) => {this.profile.description = e.target.previousElementSibling.value;}

  removeValue = (idx) => {this.profile.values.splice(idx, 1);}
  addValue = (e) => {
    this.profile.values.push(e.target.previousElementSibling.value);
    e.target.previousElementSibling.value = "";
  }

  removeGoal = (key, idx) => {this.profile.goals[key].splice(idx, 1);}
  addGoal = (key) => {
      let element = <HTMLInputElement>document.getElementById("goalInput");
      this.profile.goals[key].push(element.value);
      element.value = "";
  }

  removeStrength = (idx) => {this.profile.strengths.splice(idx, 1);}
  addStrength = (e) => {
    this.profile.strengths.push(e.target.previousElementSibling.value);
    e.target.previousElementSibling.value = "";
  }

  removeWeakness = (idx) => {this.profile.weaknesses.splice(idx, 1);}
  addWeakness = (e) => {
    this.profile.weaknesses.push(e.target.previousElementSibling.value);
    e.target.previousElementSibling.value = "";
  }

  removeInterest = (key, idx) => {this.profile.interests[key].list.splice(idx, 1);}
  addInterest = (e, key) => {
    this.profile.interests[key].list.push(e.target.previousElementSibling.value);
    e.target.previousElementSibling.value = "";
  }

  constructor(private profileService: ProfileService) {
   }

  ngOnInit() {
    this.profileService.getUserProfile().subscribe(profile => {
      this.profile = profile;
    })
  }

}
