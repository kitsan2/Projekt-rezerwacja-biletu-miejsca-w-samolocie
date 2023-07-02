import { Component, OnInit } from '@angular/core';
import { FlightInfoService } from './../../flight-info.service';

@Component({
  selector: 'app-wybor-miejsca',
  templateUrl: './wybor-miejsca.component.html',
  styleUrls: ['./wybor-miejsca.component.css']
})
export class WyborMiejscaComponent implements OnInit {

  daneLotu:any = ''
  wybraneMiejsce:any[] = []
  daneMiejsc:any[] = [
    {id:1, name: "1A", disable: false},
    {id:2, name: "1B", disable: false},
    {id:3, name: "1C", disable: true},
    {id:4, name: "1D", disable: false},
    {id:5, name: "2A", disable: false},
    {id:6, name: "2B", disable: true},
    {id:7, name: "2C", disable: false},
    {id:8, name: "2D", disable: false},
    {id:9, name: "3A", disable: false},
    {id:10, name: "3B", disable: false},
    {id:11, name: "3C", disable: false},
    {id:12, name: "3D", disable: true},
  ]
  constructor(
    private readonly flightInfo:FlightInfoService
  ) { }

  miejsceWybrane(event:any){
    console.log(event.target.options)
    const options = event.target.options
    this.wybraneMiejsce = []
    for (let i = 0; i < options.length; i++){
      if (options[i].selected){
        this.wybraneMiejsce.push(options[i].value)
      }
    }
    console.log(this.wybraneMiejsce)
  }

  ngOnInit() {
   
  }

}