import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-organizations',
  templateUrl: './social-organizations.component.html',
  styleUrls: ['./social-organizations.component.css']
})
export class SocialOrganizationsComponent implements OnInit {
  socialOrganizations: string[] = ["Tribes", "Clans", "Families", "Church"];
  socialOrganizationsChoice: string = this.randomSelection(this.socialOrganizations)

  constructor() { }

  ngOnInit() {
  }

//   // is (string: string): boolean {
//   //   if (string==="") {
//   //     this. = "";
//   //     return true
//   //   } else {
//   //     return false
//   //   }
//   // }

  randomSelection(array: string[]){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}