import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  colorOne:string = "blue";

  onOff:any=true;

 product:any = {
   label: "iphone 12",
   price: 1255899990,
   stock: 5

 }

      constructor() { }

  ngOnInit(): void {
  }

  getCouleur(){
    return "green";
  }

onSwitch(){
  if(this.onOff)
    this.onOff = false;
   else 
      this.onOff = true;
    }
  }


