import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent implements OnInit {

  @Input() driver:any;

  constructor() { }

  ngOnInit(): void {
  }

}
