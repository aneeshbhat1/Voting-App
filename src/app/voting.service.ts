import { Injectable } from '@angular/core';
import {VoteData} from './voteData';
import {PollData} from './pollData';
// import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VotingService {
  createPoll(voteData : VoteData):Observable<PollData[]>{
    return new Observable<PollData[]>();
		// var headers = new Headers();
		// headers.append('Content-Type', 'application/json');

		// return this._http.post(this._webApiUrl+'PostAnIssue',JSON.stringify(comment), { headers: headers })
		// 		.map((res: Response) => res.json());
	}
}