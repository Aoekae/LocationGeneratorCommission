import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infrastructure-events',
  templateUrl: './infrastructure-events.component.html',
  styleUrls: ['./infrastructure-events.component.css']
})
export class InfrastructureEventsComponent implements OnInit {

  infrastructureEvents: string[]=["Road construction", "Bridge construction", "Well digging", "Maintenence on roads"];
  infrastructureEventsChoice: string = this.randomSelection(this.infrastructureEvents)

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
