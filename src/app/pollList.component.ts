import { Component } from '@angular/core';
import { VotingService } from './voting.service';
import { PollData } from './pollData';

@Component({
  selector: 'poll-list',
  templateUrl: './pollList.component.html',
  styleUrls: ['./app.component.css']
})
export class PollListComponent {
  title = 'Poll List';
  private pollList:PollData[];
  constructor(private votingService:VotingService){
    
      }
  onNewPollAdded(pollList:PollData[]){
    this.pollList = pollList;
  }
}
