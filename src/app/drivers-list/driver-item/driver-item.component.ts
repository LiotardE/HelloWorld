import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent implements OnInit {

  @Input() driver:any;

  isLiked:boolean = false;

  likingMessage: string = "Liker maintenant !";

  constructor() { }

  ngOnInit(): void {
  }

  onLiking(){
    this.isLiked= true;
    this.likingMessage= "Un like en plus ! [liké]";
  }

}
