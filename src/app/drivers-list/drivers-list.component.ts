import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  colorOne:string = "blue";

  onOff:any=true;

      constructor() { }

  ngOnInit(): void {
  }

  getCouleur(){
    return "green";
  }

onSwitch(){
  if(this.onOff){
    this.onOff = false;
  }else {
      this.onOff = true;
    }
  }
}

