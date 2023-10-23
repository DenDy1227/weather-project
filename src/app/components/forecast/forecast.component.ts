import { Component, Input, OnInit } from '@angular/core';
import { WeatherServiceTsService } from 'src/app/services/weather.service.ts.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  weatherData: any;
  weatherService: any;
  @Input() days!: any;
  constructor( weatherService: WeatherServiceTsService, ) {}
  ngOnInit() {
    const location = 'Kharkiv'; // Replace with the desired location
    // this.weatherService.getWeatherData(location).subscribe((data: any) => {
    //   this.weatherData = data;
    // });
  }
}
