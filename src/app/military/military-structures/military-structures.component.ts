import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-military-structures',
  templateUrl: './military-structures.component.html',
  styleUrls: ['./military-structures.component.css']
})
export class MilitaryStructuresComponent implements OnInit {

  militaryStructures: string[]=["Barracks", "Noble Houses", "Barracks", "Guildhouses"];
  militaryStructuresChoice: string = this.randomSelection(this.militaryStructures);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
