import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-detail-forecast',
  templateUrl: './detail-forecast.component.html',
  styleUrls: ['./detail-forecast.component.scss']
})
export class DetailForecastComponent {
  @Input() hoursForecast!:any[];
}
