import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-people',
  templateUrl: './information-people.component.html',
  styleUrls: ['./information-people.component.css']
})
export class InformationPeopleComponent implements OnInit {

  infomationPeople: string[]=["Spymasters", "Guilds", "Council", "Nobility", "Black Market Information Brokers"];
  informationPeopleChoice: string = this.randomSelection(this.infomationPeople);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }

}
