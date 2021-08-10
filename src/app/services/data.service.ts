import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  test:string = 'test1';

  test2:string = 'HAAAA';

  constructor() {
    console.log(this.test2);
   }

  getTest(){
    return this.test;
}

}
