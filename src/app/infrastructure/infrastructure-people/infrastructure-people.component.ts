import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infrastructure-people',
  templateUrl: './infrastructure-people.component.html',
  styleUrls: ['./infrastructure-people.component.css']
})
export class InfrastructurePeopleComponent implements OnInit {

  infrastructurePeople: string[]=["Builders", "Council", "Landowners", "Nobility", "Merchants"];
  infrastructurePeopleChoice: string = this.randomSelection(this.infrastructurePeople);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
