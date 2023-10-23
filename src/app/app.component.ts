import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { ForecastComponent } from './components/forecast/forecast.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  title = 'weather-dashboard';

  @ContentChildren(ForecastComponent) forecast!: QueryList<ForecastComponent>;

  ngAfterContentInit(): void {
    console.log(this.forecast,'fc')
  }
}
