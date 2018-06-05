import {Component, OnChanges, OnInit} from '@angular/core';

import {CommonUtil} from "../../../../util/common.util";


@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  // private dateComparator = new DateComparator();
  public openInfo: Boolean = false;
  public fullName: string = "";
 /* public currentEvent: EventInfoModel = new EventInfoModel();
  public comments: EventComment[] = [];
  public comment: string = "";


  constructor(private eventsService: EventsService){
  }

  private refreshComments(){
    this.eventsService.getEventComments(this.currentEvent.id)
      .subscribe( data => {
          this.comments = data;
        },
        err => console.log(err));
  }

/!*  seeEventInfo(event: EventInfoModel){
    this.openInfo = true;
    this.currentEvent = event;
    this.refreshComments();
  }*!/

  onSubmit(){
    if(this.comment === ''){
      console.log('empty comment');
    }else{
      this.eventsService.comment(this.fullName, this.currentEvent.id, this.comment)
        .subscribe(success => {
          if(success){
            this.comment = '';
            this.refreshComments();
          }
          },
          err => console.log(err));
    }
  }*/

  ngOnInit() {
    this.fullName = CommonUtil.getSessionUserFullName();
  }
}

