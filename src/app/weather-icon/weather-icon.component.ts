import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.sass']
})
export class WeatherIconComponent implements OnInit {
  icon : string = "weather";
  _weatherId: number | undefined;

  @Input() set code(value: number){
    this._weatherId = value;
    
    if (this._weatherId >= 200 && this._weatherId <= 250) {
      this.icon = 'thunder';
    }

    if (this._weatherId >= 300 && this._weatherId <= 350) {
      this.icon = 'rainy-4';
    }

    if (this._weatherId >= 500 && this._weatherId <= 550) {
      this.icon = 'rainy-7';
    }

    if (this._weatherId == 600) {
      this.icon = 'snowwy-4'; 
    }

    if (this._weatherId == 601) {
      this.icon = 'snowwy-5';
    }

    if (this._weatherId > 601 && this._weatherId <= 650) {
      this.icon = 'snowwy-6';
    }

    if (this._weatherId == 800) {
      this.icon = 'day';
    }

    if (this._weatherId == 801) {
      this.icon = 'cloudy-day-1';
    }

    if (this._weatherId == 802) {
      this.icon = 'cloudy-day-2';
    }

    if (this._weatherId > 802) {
      this.icon = 'cloudy-day-3';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
