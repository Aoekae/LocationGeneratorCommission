import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infrastructure-capabilities',
  templateUrl: './infrastructure-capabilities.component.html',
  styleUrls: ['./infrastructure-capabilities.component.css']
})
export class InfrastructureCapabilitiesComponent implements OnInit {

  infrastructureCapabilities: string[]=["Poorly maintained roads", "Moderately well maintained roads", "Well maintained roads", "Known for their impressive wallbuilding", "Known for building well planned dams"];
  infrastructureCapabilitiesChoice: string = this.randomSelection(this.infrastructureCapabilities);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
