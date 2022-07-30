import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-political-structures',
  templateUrl: './political-structures.component.html',
  styleUrls: ['./political-structures.component.css']
})
export class PoliticalStructuresComponent implements OnInit {

  politicalStructures: string[] = ["Hall", "Palace", "Castle", "Capitol", "House", "Parliament", "Building", "Assembly", "Tower"];
  politicalStructuresChoice: string = this.randomSelection(this.politicalStructures);

  constructor() { }

  ngOnInit() {
  }

  isAnarchy(string: string): boolean {
    if (string==="Anarchy") {
      this.politicalStructuresChoice = "Nothing";
      return true
    } else {
      return false
    }
  }

  randomSelection(array: string[]){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }
}
