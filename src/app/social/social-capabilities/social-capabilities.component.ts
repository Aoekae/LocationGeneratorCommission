import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-capabilities',
  templateUrl: './social-capabilities.component.html',
  styleUrls: ['./social-capabilities.component.css']
})
export class SocialCapabilitiesComponent implements OnInit {

  socialCapabilities: string[] = ["Strong ties to low rank town", "Moderate ties to low rank town", "Weak ties to low rank town", "Lacks social network", "Strong ties to mid rank town", "Moderate ties to mid rank town", "Weak ties to mid rank town", "Strong ties to high rank town", "Moderate ties to high rank town", "Weak ties to high rank town", "Widely respected regionally", "Widely respected nationally", "Widely respected internationally"]
  socialCapabilitiesChoice: string = this.randomSelection(this.socialCapabilities);

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
