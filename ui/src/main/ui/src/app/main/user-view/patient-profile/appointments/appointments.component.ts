import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../../../util/common.util";
import {Router} from "@angular/router";
import {Comparator} from "clarity-angular";

/*class DateComparator implements Comparator<PatientAppointmentModel> {
  compare(a: PatientAppointmentModel, b: PatientAppointmentModel) {
    return +new Date(b.date) - +new Date(a.date);
  }
}*/

@Component({
              moduleId: module.id,
              selector: 'appointments-component',
              templateUrl: 'appointments.component.html',
              styleUrls: ["appointments.component.css"],
              providers: []
           })
export class AppointmentsComponent implements OnInit {
   private userId: number = 0;
   private appToCancel: number = 0;
   public cancelWarning: boolean = false;
   public currentComment: string = "";
   public openComment: boolean = false;

   constructor(private router: Router) {
   }

   ngOnInit() {
     this.userId = CommonUtil.getSessionUserId();
   }
}
