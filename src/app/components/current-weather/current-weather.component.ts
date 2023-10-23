import { WeatherServiceTsService } from './../../services/weather.service.ts.service';
import { Component, OnInit, ContentChildren, QueryList, Input } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatTableDataSource } from '@angular/material/table';
import { ForecastComponent } from '../forecast/forecast.component';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  weatherData: any;
  @Input() countToDsplay!: number;
  tabs = [{ label: 'Tab11' }];
  selectedTabIndex = 0;
  dataSource!: any;

  // @ContentChildren(ForecastComponent) forecast!: QueryList<ForecastComponent>;

  constructor( public weatherService: WeatherServiceTsService, ) {}
  ngOnInit() {
    const location = 'Kharkiv'; // Replace with the desired location
    this.weatherService.getWeatherData(location).subscribe((data: any) => {
      // this.weatherData = data.days.splice(0, this.countToDsplay);
      this.dataSource = data;
      console.log()
    });

    // this.dataSource = new MatTableDataSource(this.weatherData);

}

ngAfterContentInit(): void {
  // console.log(this.forecast,'fc')
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
