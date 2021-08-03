import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  enfantUn:string = "Andreax";

  enfantDeux:string = "Fille";

  enfantTrois:string = "Garçon";

  enfantQuatre:string = "Mercedes AMG";

  enfantCinq:string = "Range Rover Evoque";

  enfantSix:string = "Ferrari F50";




  constructor() { }

  ngOnInit(): void {
  }

}
