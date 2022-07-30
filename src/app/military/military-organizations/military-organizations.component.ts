import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-military-organizations',
  templateUrl: './military-organizations.component.html',
  styleUrls: ['./military-organizations.component.css']
})
export class MilitaryOrganizationsComponent implements OnInit {

  militaryOrganizations: string[]=["Army", "Guard", "Insurgents", "Bandits", "Militia", "Church"];
  militaryOrganizationsChoice: string = this.randomSelection(this.militaryOrganizations);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
