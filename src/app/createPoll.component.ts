import { Component,Output,EventEmitter } from '@angular/core';
import { VotingService } from './voting.service';
import { VoteData } from './voteData';
import { PollData } from './pollData';

@Component({
  selector: 'create-poll',
  templateUrl: './createPoll.component.html',
  styleUrls: ['./app.component.css']
})
export class CreatePollComponent {
  title = 'Create Poll';
  private pollName:String;
  private options:String;
  private pollData:PollData[]=new Array();
  @Output() PollAdded = new EventEmitter<PollData[]>();
  constructor(private votingService:VotingService){

  }
  onCreateClicked(){
    this.pollData.push(<PollData>{pollName:this.pollName});
    this.PollAdded.emit(this.pollData);
    this.votingService.createPoll(<VoteData>{PollName : this.pollName,Options:this.options.split("\n")})
    .subscribe(pollList=>
      {
      },
      error => console.log(error),
      () => console.log('Dates returned successfully'));;
  }
}
