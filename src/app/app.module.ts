import { NgModule , LOCALE_ID} from '@angular/core'; // Add LOCALE_ID

//import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { CarItemComponent } from './cars-list/car-item/car-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BananeService } from './services/banane.service';
import { RestaurantService } from './services/restaurant.service';
import { DriverItemComponent } from './drivers-list/driver-item/driver-item.component';
import { DataService } from './services/data.service';
import { NewCarComponent } from './cars-list/new-car/new-car.component';
import { FooterComponent } from './footer/footer.component';
import { NewDriverComponent } from './drivers-list/new-driver/new-driver.component';
import { DataFromApiComponent } from './data-from-api/data-from-api.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsListComponent,
    DriversListComponent,
    HomePageComponent,
    FourOhFourComponent,
    CarItemComponent,
    DriverItemComponent,
    NewCarComponent,
    FooterComponent,
    NewDriverComponent,
    DataFromApiComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" },
              BananeService,
              RestaurantService,
              DataService], // In providers array of @NgModule
  bootstrap: [AppComponent]
})
export class AppModule { }
