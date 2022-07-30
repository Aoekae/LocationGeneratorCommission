import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-economic-organizations',
  templateUrl: './economic-organizations.component.html',
  styleUrls: ['./economic-organizations.component.css']
})
export class EconomicOrganizationsComponent implements OnInit {

  economicOrganizations: string[]=["Banks", "Landowners", "Nobility", "Merchants"]
  economicOrganizationsChoice: string = "Economic Organizations:   " + this.randomSelection(this.economicOrganizations)

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }

}
