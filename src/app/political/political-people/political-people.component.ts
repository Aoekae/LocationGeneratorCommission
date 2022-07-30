import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-political-people',
  templateUrl: './political-people.component.html',
  styleUrls: ['./political-people.component.css']
})
export class PoliticalPeopleComponent implements OnInit {

  politicalPeople: string[] = ["Republic", "Democracy", "Monarchy", "Dictatorship", "Theocracy", "Anarchy"];
  politicalPeopleChoice: string = this.randomSelection(this.politicalPeople);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
