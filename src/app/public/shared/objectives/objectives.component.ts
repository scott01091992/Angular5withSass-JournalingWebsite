import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../../services/profile.service';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.sass']
})
export class ObjectivesComponent implements OnInit {

  goals = null;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getObjectives().subscribe(goals => {
      if(goals){
        console.log(goals);
        this.goals = goals;
      }else{
        this.goals = {
          shortTerm: [""],
          longTerm: [""]
        }
      }
    })
  }

}
