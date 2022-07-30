import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-military-capabilities',
  templateUrl: './military-capabilities.component.html',
  styleUrls: ['./military-capabilities.component.css']
})
export class MilitaryCapabilitiesComponent implements OnInit {

  militaryCapabilities: string[]=["Strong Navy", "Strong Cavalry", "Mercenaries", "Strong Army", "Militarily weak", "Farmers", "Citizen's Militia"];
  militaryCapabilitiesChoice: string = this.randomSelection(this.militaryCapabilities);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
