import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../../../src/app/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  pogoda;
  temperatura;
  wilgotnosc;
  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getData().subscribe((data: string) => {
      console.log(data);

      if (data === 'KTW') {
        this.weatherInfo('katowice');
      } else if (data === 'JFK') {
        this.weatherInfo('New York');
      } else if (data === 'CDG') {
        this.weatherInfo('Paris');
      } else {
        this.weatherInfo();
      }
    });
    this.weatherService.getData2().subscribe((data: string) => {
      console.log(data);

      if (data === 'KTW') {
        this.weatherInfo('katowice');
      } else if (data === 'JFK') {
        this.weatherInfo('New York');
      } else if (data === 'CDG') {
        this.weatherInfo('Paris');
      } else {
        this.weatherInfo();
      }
    });
  }

  weatherInfo(city: string = 'warszawa') {
    this.weatherService.getWeatherData(city).subscribe({
      next: (data: any) => {
        console.log(data);
        this.pogoda = Object.assign({}, ...data.weather);
        this.temperatura = data.main.temp;
        this.wilgotnosc = data.main.humidity;
      },
    });
  }
}
