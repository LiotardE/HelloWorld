import { Component, OnInit } from '@angular/core';
import { BananeService } from '../services/banane.service';
import { DataService } from '../services/data.service';
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
              private resto:RestaurantService,
              private data:DataService
              ) { 
    console.log(banana.getFruit())
    console.log(this.resto.name)
    console.log(this.data.test)

  }



  ngOnInit(): void {
    
  }


}

