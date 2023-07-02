import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-date',
  templateUrl: './current-date.component.html',
  styleUrls: ['./current-date.component.css']
})
export class CurrentDateComponent implements OnInit {

  now:number;

  constructor() { 
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }

  dateTime: Date;

  ngOnInit() {
    this.dateTime = new Date();
  }

}