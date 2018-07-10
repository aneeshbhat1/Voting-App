import { Component,OnInit } from '@angular/core';
import { VotingService } from './voting.service';
//import * as Chart from 'chart.js';

@Component({
  selector: 'view-poll',
  templateUrl: './viewPoll.component.html',
  styleUrls: ['./app.component.css']
})
export class ViewPollComponent implements OnInit{
  PieChart:any;
  title = 'View Poll';
  constructor(private votingService:VotingService){  
  }
  ngOnInit() {
    // this.PieChart = new Chart('pieChart', {
    //   type: 'pie',
    //   data: {
    //     labels: ["January", "February", "March", "April", "May", "June", "July"],
    //     datasets:[{
    //       label:'# of votes',
    //       data: [65, 59, 80, 81, 56, 55, 40],
    //       backgroundColor:[
    //         'rgba(255,99,132,1)',
    //         'rgba(255,99,132,1)',
    //         'rgba(255,99,132,1)',
    //         'rgba(255,99,132,1)',
    //         'rgba(255,99,132,1)',
    //         'rgba(255,99,132,1)',
    //         'rgba(255,99,132,1)'
    //       ],
    //       borderWidth:1
    //     }]
    //   },
    //   options: {
    //     title:{
    //       text:"Pie Chart",
    //       display:true
    //     },
    //     responsive:true,
    //     legend: {
    //       display: true
    //     }
    //   }
    // });
  }
}
