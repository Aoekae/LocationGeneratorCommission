import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infrastructure-structures',
  templateUrl: './infrastructure-structures.component.html',
  styleUrls: ['./infrastructure-structures.component.css']
})
export class InfrastructureStructuresComponent implements OnInit {

  infrastructureStructures: string[]=["Roads", "Bridges", "Walls", "Dams", "Levies"];
  infrastructureStructuresChoice: string = this.randomSelection(this.infrastructureStructures);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
