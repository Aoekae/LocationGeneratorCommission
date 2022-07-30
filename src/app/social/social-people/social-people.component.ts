import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-people',
  templateUrl: './social-people.component.html',
  styleUrls: ['./social-people.component.css']
})
export class SocialPeopleComponent implements OnInit {
socialPeople: string[] = ["Hall", "Palace", "Castle", "Capitol", "House", "Parliament", "Building", "Assembly", "Tower"];
socialPeopleChoice: string = this.randomSelection(this.socialPeople)

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
