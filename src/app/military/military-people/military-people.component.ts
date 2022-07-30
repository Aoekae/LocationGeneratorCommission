import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-military-people',
  templateUrl: './military-people.component.html',
  styleUrls: ['./military-people.component.css']
})
export class MilitaryPeopleComponent implements OnInit {

  militaryPeople: string[]=["Nobility", "Merchants", "Landowners", "The Church", "Militia"];
  militaryPeopleChoice: string = this.randomSelection(this.militaryPeople);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
