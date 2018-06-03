import {Component, OnChanges, OnInit} from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import {EventComment} from "./event.comment.model";
import {CommonUtil} from "../../../../util/common.util";
import {Comparator} from "clarity-angular";

/*class DateComparator implements Comparator<EventInfoModel> {
  compare(a: EventInfoModel, b: EventInfoModel) {
    return +new Date(b.startTime) - +new Date(a.startTime);
  }
}*/

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

