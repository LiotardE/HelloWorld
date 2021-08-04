import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  constructor() { }

  isOnLine:boolean = true;

  boo:any = {
      title:"Le secret des croisades",
      author: "AndréThomas",
      price: null
  }

  ngOnInit(): void {
  }

}
