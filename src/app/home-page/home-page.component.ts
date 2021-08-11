import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title:string = "Drive-X";

 
 
  constructor(private data:DataService) { 
    console.log(this.data.test);

  }



  ngOnInit(): void {
    
  }


}

