import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-events',
  templateUrl: './social-events.component.html',
  styleUrls: ['./social-events.component.css']
})
export class SocialEventsComponent implements OnInit {

  socialEvents: string[] = ["Ball", "Parties", "Holidays", "Town Dances", "Religious events"];
  socialEventsChoice: string = this.randomSelection(this.socialEvents);

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
