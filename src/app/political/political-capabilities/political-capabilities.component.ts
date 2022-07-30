import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-political-capabilities',
  templateUrl: './political-capabilities.component.html',
  styleUrls: ['./political-capabilities.component.css']
})
export class PoliticalCapabilitiesComponent implements OnInit {

  politicalCapabilities: string[]=["Espionage", "Dispute resolution", "Insurgency", "Capable Diplomacy", "Strong ties with neighboring country", "Has a mutual defense pact with neighbor"];
  politicalCapabilitiesChoice: string = this.randomSelection(this.politicalCapabilities);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
