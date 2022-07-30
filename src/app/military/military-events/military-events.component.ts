import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-military-events',
  templateUrl: './military-events.component.html',
  styleUrls: ['./military-events.component.css']
})
export class MilitaryEventsComponent implements OnInit {

  militaryEvents: string[]=["Military Operations", "Raids", "Loss of Leadership", "Attacking Army"];
  militaryEventsChoice: string = this.randomSelection(this.militaryEvents);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
