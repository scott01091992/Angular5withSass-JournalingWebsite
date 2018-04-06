import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  profile = null;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getUserProfile().subscribe(profile => {
      if(profile){
        console.log(profile);
          this.profile = profile;
      }else{
        this.profile = {
          img: {},
          about: {
            name: "",
            dob: "",
            location: "",
          },
          description: "",
          values: [""],
          goals: {
            primary: [""],
            shortTerm: [""],
            longTerm: [""]
          },
          weaknesses: [""],
          strengths: [""],
          interests: {
            optimization: {
              imgpath: "",
              list: [""]
            }
            ,
            design: {
              imgpath: "",
              list: [""]
            },
            development: {
              imgpath: "",
              list: [""]
            },
            gaming: {
              imgpath: "",
              list: [""]
            },
            science: {
              imgpath: "",
              list: [""]
            },
            investigation: {
              imgpath: "",
              list: [""]
            },
            miscellaneous: {
              imgpath: "",
              list: [""]
            }
          }
        }
      }
    })
  }

}
