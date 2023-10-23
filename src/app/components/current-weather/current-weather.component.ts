import { WeatherServiceTsService } from './../../services/weather.service.ts.service';
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  weatherData: any;
  tabs = [{ label: 'Tab11' }];
  selectedTabIndex = 0;
  dataSource!: any;

  constructor( public weatherService: WeatherServiceTsService, ) {}
  ngOnInit() {
    const location = 'Kharkiv'; // Replace with the desired location
    this.weatherService.getWeatherData(location).subscribe((data: any) => {
      this.weatherData = data.days;
    });

    this.dataSource = new MatTableDataSource(this.weatherData);
}


getTemperatureColor(number: number): string {
  if(number<10){
    return 'blue'
  }
  else if (number>15){
    return 'red'
  }
  return 'yellow'
}
addTab() {
  this.tabs.push({ label: 'Tab ' + (this.tabs.length + 1) });
}

removeTab(index: number) {
  this.tabs.splice(index, 1);
}

tabChanged(event: MatTabChangeEvent | any) {
  this.selectedTabIndex = event.index;
}

}
