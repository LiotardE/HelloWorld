import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent implements OnInit {

  @Input() driver:any;

  isLiked:boolean = false;
  isUnliked:boolean = false;


 // likingMessage: string = "Liker maintenant !";
 // unlikingMessage: string = "UnLiker maintenant !";
 
  
  constructor() { }

  ngOnInit(): void {
  }

  onLiking(){
    this.driver.likeIts++;
    //this.isLiked= true;
    //this.likingMessage= "Un like en plus ! [liké]";
    
  }
  onUnliked(){
    this.driver.likeIts--;
    //this.isUnliked= true;
    //this.unlikingMessage= "Un like en moins ! [unliké]";
  }

  

}
