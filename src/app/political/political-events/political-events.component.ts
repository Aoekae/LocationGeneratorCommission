import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-political-events',
  templateUrl: './political-events.component.html',
  styleUrls: ['./political-events.component.css']
})
export class PoliticalEventsComponent implements OnInit {

  politicalEvents: string[]=["Elections", "Council meetings", "Shareholder meetings", "Diplomatic Events"];
  politicalEventsChoice: string = this.randomSelection(this.politicalEvents);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
