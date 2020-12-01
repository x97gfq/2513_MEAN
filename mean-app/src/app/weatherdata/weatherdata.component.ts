import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weatherdata',
  templateUrl: './weatherdata.component.html',
  styleUrls: ['./weatherdata.component.css']
})
export class WeatherdataComponent implements OnInit {
  weatherData: [] = [];
  errorMessage: '' = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://api.openweathermap.org/data/2.5/weather?id=6183858&appid=2ad263b9a82888fd39382d86aa2fc030&mode=json').subscribe({
      next: data => {
          this.weatherData = data;
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
    })
  }
}
