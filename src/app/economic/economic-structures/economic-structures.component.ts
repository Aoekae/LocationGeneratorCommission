import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-economic-structures',
  templateUrl: './economic-structures.component.html',
  styleUrls: ['./economic-structures.component.css']
})
export class EconomicStructuresComponent implements OnInit {

  economicStructures: string[]=["Banks", "Markets", "Storage Facilities", "Struggling"];
  economicStructuresChoice: string = "Economic Structures:   " + this.randomSelection(this.economicStructures)

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }

}
