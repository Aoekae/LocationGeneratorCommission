import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-political-areas',
  templateUrl: './political-areas.component.html',
  styleUrls: ['./political-areas.component.css']
})
export class PoliticalAreasComponent implements OnInit {

  politicalAreas: string[]=["District Boundary", "Party Affiliation Areas", "Market", "Guilds", "Town Hall"];
  politicalAreasChoice: string = this.randomSelection(this.politicalAreas);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
