import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-economic-capabilities',
  templateUrl: './economic-capabilities.component.html',
  styleUrls: ['./economic-capabilities.component.css']
})
export class EconomicCapabilitiesComponent implements OnInit {

  economicCapabilities: string[]=["Access to Banks", "Ability to withstand natural disasters", "Ability to survive gang violence", "Vulnerable to natural disasters", "Vulnerable to violence"];
  economicCapabilitiesChoice: string = "Economic Capabilities:   " + this.randomSelection(this.economicCapabilities)

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }

}
