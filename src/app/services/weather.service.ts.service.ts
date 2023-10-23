import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceTsService {
  private apiUrl =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';
  constructor(public http:HttpClient) { }


  getWeatherData(location: string) {
    const apiKey = '5C54YACV6YPBYCJS8GNF37W99';
    const unitGroup = 'metric';
    const contentType = 'json';

    const url = `${this.apiUrl}/${location}?unitGroup=${unitGroup}&key=${apiKey}&contentType=${contentType}`;

    return this.http.get(url);
  }

}

//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Kharkiv?unitGroup=metric&key=5C54YACV6YPBYCJS8GNF37W99&contentType=json
//Weather123_27L -password
