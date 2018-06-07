import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../util/common.util";
import {Router} from "@angular/router";

@Component({
              moduleId: module.id,
              selector: 'patient-component',
              templateUrl: 'user.component.html',
              styleUrls: ["user.component.css"],
              providers: []
           })
export class UserComponent implements OnInit {
   private userEmail: string = '';
   constructor(private router: Router) {
   }

   editProfile(){
     this.router.navigate(['/user/profile/edit']);
   }

   dentistSearch(){
     this.router.navigate(['/user/dentists']);
   }

   logout(){
     CommonUtil.removeUser();
      this.router.navigate(['']);
   }
   ngOnInit() {
     this.userEmail = CommonUtil.getSessionUserEmail();
   }
}
