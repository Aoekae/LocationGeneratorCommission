import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infrastructure-organizations',
  templateUrl: './infrastructure-organizations.component.html',
  styleUrls: ['./infrastructure-organizations.component.css']
})
export class InfrastructureOrganizationsComponent implements OnInit {

  infrastructureOrganizations: string[]=["The Church", "Nobility", "Council", "Merchants", "Citizens"];
  infrastructureOrganizationsChoice: string = this.randomSelection(this.infrastructureOrganizations);

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
