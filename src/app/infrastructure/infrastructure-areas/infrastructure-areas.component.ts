import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infrastructure-areas',
  templateUrl: './infrastructure-areas.component.html',
  styleUrls: ['./infrastructure-areas.component.css']
})
export class InfrastructureAreasComponent implements OnInit {
  infrastructureAreas: string[]=["Irrigation Networks", "Water Tables", "Aquaducts", "Levies", "Roads"]
  infrastructureAreasChoice: string = this.randomSelection(this.infrastructureAreas)

  constructor() { }

  ngOnInit() {
  }

  randomSelection(array){
    let index = Math.floor(Math.random()*array.length);
    return array[index];
 }

}
