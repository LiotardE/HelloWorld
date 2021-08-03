import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  vehicule:string = "ferrari";

  @Input() enfant:any;

  @Input() enfant2:any;


  constructor() { }

  ngOnInit(): void {
  }

}
