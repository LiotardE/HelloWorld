import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  carUpdate:any;

  vehiculeUn:object = {

  marque:"Mercedes AMG",
  prix:4200
  }

  vehiculeDeux:object = {

    marque:"Mercedes AMG",
    prix:4200
    }
  
  vehiculeTrois:object = {

    marque:"Mercedes AMG",
    prix:4200
    }


  constructor() { }

  ngOnInit(): void {
    this.carUpdate = new Date();
  }

}
