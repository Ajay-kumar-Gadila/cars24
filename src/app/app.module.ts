import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { WhyUsComponent } from './why-us/why-us.component';
import { CarsByCategoryComponent } from './cars-by-category/cars-by-category.component';
import { RecentlyAddedCarsComponent } from './recently-added-cars/recently-added-cars.component';
import { AcrossComponent } from './across/across.component';
import { HappyDirvingComponent } from './happy-dirving/happy-dirving.component';
import { CarsNewsComponent } from './cars-news/cars-news.component';
import { CarSellingComponent } from './car-selling/car-selling.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    WhyUsComponent,
    CarsByCategoryComponent,
    RecentlyAddedCarsComponent,
    AcrossComponent,
    HappyDirvingComponent,
    CarsNewsComponent,
    CarSellingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
