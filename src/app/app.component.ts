import { Component,ViewChild } from '@angular/core';
import { PollData } from './pollData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('pollList') pollList;
  onNewPollAdded(pollData:PollData[]){
    this.pollList.onNewPollAdded(pollData);
  }
}
