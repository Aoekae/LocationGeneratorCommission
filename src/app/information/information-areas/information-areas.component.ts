import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-areas',
  templateUrl: './information-areas.component.html',
  styleUrls: ['./information-areas.component.css']
})
export class InformationAreasComponent implements OnInit {

  informationAreas: string[]=["Information Brokerage", "Spy's guild", "The Church", "Town Newspaper", "Town Crier"];
  informationAreasChoice: string = "Information Areas:   " + this.randomSelection(this.informationAreas);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }

}
