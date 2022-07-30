import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-organizations',
  templateUrl: './information-organizations.component.html',
  styleUrls: ['./information-organizations.component.css']
})
export class InformationOrganizationsComponent implements OnInit {

  informationOrganizations: string[]=["Spymasters", "the Resistance", "Council"];
  informationOrganizationsChoice: string = this.randomSelection(this.informationOrganizations);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }

}
