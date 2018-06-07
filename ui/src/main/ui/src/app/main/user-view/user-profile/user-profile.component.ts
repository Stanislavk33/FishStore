import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../../util/common.util";
import {Router} from "@angular/router";

@Component({
              moduleId: module.id,
              selector: 'patient-profile-component',
              templateUrl: 'user-profile.component.html',
              styleUrls: ["user-profile.component.css"],
              providers: []
           })
export class UserProfileComponent implements OnInit {
  public userEmail;
   constructor(private router: Router) {
   }

   loadAppointments() {
     this.router.navigate(['/patient/profile/appointments']);
   }
   editProfile() {
     this.router.navigate(['/patient/profile/edit']);
   }
   ambulatoryList() {
     this.router.navigate(['/patient/profile/ambulatory']);
   }
   ngOnInit() {
     this.userEmail = CommonUtil.getSessionUserEmail();
   }
}
