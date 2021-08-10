import { Injectable } from "@angular/core";


@Injectable()

export class BananeService {

    fruit:string = "Banane Plantain -FROM API";
    prix:number = 5;

    //fruit:string = this.banane.getFruit();

    constructor(){}

    getFruit(){
        return this.fruit;
    }


} 
