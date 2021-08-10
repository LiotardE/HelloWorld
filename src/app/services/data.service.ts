import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  test:string = 'test1';

  constructor() { }

  getTest(){
    return this.test;
}

}
