import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class WeatherService {
  API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
  API_KEY = '&appid=321f9eeccfb554c2bdbf258eead21608';
  API_UNITS = '&units=metric';
  API_LANG = '&lang=pl';
  private data = new BehaviorSubject<any>('pierwsza wartosc');
  private data2 = new BehaviorSubject<any>('pierwsza wartosc');

  //city = input.value || 'warsaw'
  constructor(private http: HttpClient) {}

  getWeatherData(city: string = 'warsaw') {
    const url =
      this.API_LINK + city + this.API_KEY + this.API_UNITS + this.API_LANG;
    return this.http.get(url);
  }

  setData(newData: any) {
    this.data.next(newData);
  }
  setData2(newData: any) {
    this.data2.next(newData);
  }

  getData() {
    return this.data.asObservable();
  }
  getData2() {
    return this.data2.asObservable();
  }
}
