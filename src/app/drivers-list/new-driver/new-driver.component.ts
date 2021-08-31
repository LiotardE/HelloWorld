import { Component, OnInit } from '@angular/core';



import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit(): void {
    //this.data.addDriver(this.pilote);
  }

}
