import { Component, OnInit } from '@angular/core';
import { BananeService } from '../services/banane.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title:string = "Drive-X";

  fruit:string = this.banana.getFruit();

  prixResto:number = this.resto.getPrice();

  constructor(private banana:BananeService, 
              private resto:RestaurantService) { 
    console.log(banana.getFruit())
    console.log(this.resto.name)
  }



  ngOnInit(): void {
    
  }


}

