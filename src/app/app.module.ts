import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HistoricalDataComponent } from './components/historical-data/historical-data.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DetailForecastComponent } from './components/detail-forecast/detail-forecast.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    ForecastComponent,
    HistoricalDataComponent,
    DetailForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
