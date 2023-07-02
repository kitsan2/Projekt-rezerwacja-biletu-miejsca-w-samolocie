import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.http.get<any>('assets/employees.json').subscribe({
    //   next: (data: any) => console.log('z http', data),
    // });
  }
}
