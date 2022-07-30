import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-capabilities',
  templateUrl: './information-capabilities.component.html',
  styleUrls: ['./information-capabilities.component.css']
})
export class InformationCapabilitiesComponent implements OnInit {

  informationCapabilities: string[]=["A literate populace", "Books widely available", "Populace struggles with literacy", "Populace almost entirely illiterate"];
  informationCapabilitiesChoice: string = this.randomSelection(this.informationCapabilities);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }

}
