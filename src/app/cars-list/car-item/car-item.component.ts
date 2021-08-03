import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  

  

  @Input() car:any;


  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(){
    alert("Vous avez réservé ce véhicule, félicitations !")
}

  isNotAvailable(){
    return true;
}

}