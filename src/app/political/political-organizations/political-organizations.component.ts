import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-political-organizations',
  templateUrl: './political-organizations.component.html',
  styleUrls: ['./political-organizations.component.css']
})
export class PoliticalOrganizationsComponent implements OnInit {

  politicalOrganizations: string[]=["Rebels", "The Empire", "Church", "Nobility", "Militia", "Council", "Merchants", "Guilds", "The Guard"];
  politicalOrganizationsChoice: string = this.randomSelection(this.politicalOrganizations);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
