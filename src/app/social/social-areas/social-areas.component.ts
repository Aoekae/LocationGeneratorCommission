import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-areas',
  templateUrl: './social-areas.component.html',
  styleUrls: ['./social-areas.component.css']
})
export class SocialAreasComponent implements OnInit {

  socialAreas: string[] = ["Shops", "Palace", "Town Hall", "Market", "Church", "Court"];
  socialAreasChoice: string = this.randomSelection(this.socialAreas);

  constructor() { }

  ngOnInit() {
  }

  // is (string: string): boolean {
  //   if (string==="") {
  //     this. = "";
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  randomSelection(array: string[]){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }

}
