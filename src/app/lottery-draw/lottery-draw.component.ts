import { Component, OnInit } from '@angular/core';
import { DrawService } from '../draw.service';

export interface DrawResults {
  drawresults: string;
  timestamp: string;
}

@Component({
  selector: 'app-lottery-draw',
  templateUrl: './lottery-draw.component.html',
  styleUrls: ['./lottery-draw.component.css']
})
export class LotteryDrawComponent implements OnInit {

  drawNumber: any = {};
  drawNo: any;
  timestamp: any;
  displayedColumns: string[] = ['drawresults', 'timestamp'];

  constructor(private service: DrawService) { }

  ngOnInit(): void {
  }

  draw(element: any, text: any) {
    localStorage.setItem("draw", JSON.stringify(this.drawNo));  
    //Change Draw button label to Draw again after the first draw
    element.textContent = text;

    //Showing the timestamp to the UI for each draw
    this.timestamp = new Date();

    //Drawing 5 different numbers
    this.drawNo = [];
    
    while (this.drawNo.length < 5) {
      this.drawNumber = Math.floor(Math.random() * 50) + 1;
      if (this.drawNo.indexOf(this.drawNumber) === -1) this.drawNo.push(this.drawNumber);
    }
    console.log(this.drawNo, Date());
  }
}
