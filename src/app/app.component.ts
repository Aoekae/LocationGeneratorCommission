import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Location Generator';


 
 randomNumber(number: number){
    let num = Math.floor(Math.random()*number);
    return num;
 }
 
}
