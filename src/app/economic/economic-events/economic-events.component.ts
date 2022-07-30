import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-economic-events',
  templateUrl: './economic-events.component.html',
  styleUrls: ['./economic-events.component.css']
})
export class EconomicEventsComponent implements OnInit {

  economicEvents: string[]=["Depression", "Economic Boom", "Upward financial trend", "Downward financial trend"]
  economicEventsChoice: string = "Economic Capabilities:   " + this.randomSelection(this.economicEvents)

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }

}
