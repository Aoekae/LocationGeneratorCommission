import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-structures',
  templateUrl: './information-structures.component.html',
  styleUrls: ['./information-structures.component.css']
})
export class InformationStructuresComponent implements OnInit {

  informationStructures: string[]=["Print Shops", "Scribes", "Scholars", "Lacking sufficient information structures"];
  informationStructuresChoice: string = this.randomSelection(this.informationStructures);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
