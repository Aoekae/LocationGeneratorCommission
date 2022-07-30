import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-events',
  templateUrl: './information-events.component.html',
  styleUrls: ['./information-events.component.css']
})
export class InformationEventsComponent implements OnInit {

  informationEvents: string[]=["Campaigns", "Sabotage", "Espionage", "Censorship"];
  informationEventsChoice: string = this.randomSelection(this.informationEvents)

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }

}
