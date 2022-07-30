import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-economic-areas',
  templateUrl: './economic-areas.component.html',
  styleUrls: ['./economic-areas.component.css']
})
export class EconomicAreasComponent implements OnInit {

  economicAreas: string[]=["Bazaar", "Shops", "Market", "Trade Routes", "Black Market"];
  economicAreasChoice: string = "Economic Areas:   " + this.randomSelection(this.economicAreas);
  

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
