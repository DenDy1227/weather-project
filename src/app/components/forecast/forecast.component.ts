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
  @Input() countToDsplay!: number;
  @Input() days!: any;

  constructor( weatherService: WeatherServiceTsService, ) {}
  ngOnInit() {
    const location = 'Kharkiv'; // Replace with the desired location
    // this.weatherService.getWeatherData(location).subscribe((data: any) => {
      const limit =(this.countToDsplay>this.days.length)?this.days.length:this.countToDsplay;
      this.weatherData = this.days.slice(0,limit);
      console.log(this.days,'forcast',limit,this.countToDsplay)
    // });
  }
}
