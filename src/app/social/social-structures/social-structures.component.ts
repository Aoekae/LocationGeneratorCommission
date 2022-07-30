import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-structures',
  templateUrl: './social-structures.component.html',
  styleUrls: ['./social-structures.component.css']
})
export class SocialStructuresComponent implements OnInit {
  socialStructures: string[] = ["Hall", "Palace", "Castle", "Capitol", "House", "Parliament", "Building", "Assembly", "Tower"];
  socialStructuresChoice: string = this.randomSelection(this.socialStructures);

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