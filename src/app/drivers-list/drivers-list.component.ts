import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  colorOne:string = "blue";

  
    constructor() { }

  ngOnInit(): void {
  }

  getCouleur(){
    return "green";
  }
}