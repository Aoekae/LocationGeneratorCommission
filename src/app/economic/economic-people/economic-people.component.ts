import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-economic-people',
  templateUrl: './economic-people.component.html',
  styleUrls: ['./economic-people.component.css']
})
export class EconomicPeopleComponent implements OnInit {

  economicPeople: string[]=["Merchant's Guild", "Thieve's Guild", "Bankers", "Corporations", "Black Market Dealers"];
  economicPeopleChoice: string = "Economic People:   " + this.randomSelection(this.economicPeople);
 
  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }

}
