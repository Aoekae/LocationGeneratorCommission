import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-military-areas',
  templateUrl: './military-areas.component.html',
  styleUrls: ['./military-areas.component.css']
})
export class MilitaryAreasComponent implements OnInit {

  militaryAreas: string[]=["Military Base", "Noble's Manor", "Outposts", "Citizen's Militia"];
  militaryAreasChoice: string = this.randomSelection(this.militaryAreas);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
