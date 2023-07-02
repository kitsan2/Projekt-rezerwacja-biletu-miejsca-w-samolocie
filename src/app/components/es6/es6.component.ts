import { Component, OnInit } from '@angular/core';
import employees from "../../../assets/employees.json";
@Component({
  selector: 'app-es6',
  templateUrl: './es6.component.html',
  styleUrls: ['./es6.component.css']
})
export class Es6Component implements OnInit {

  employeeData:any
  constructor() { }

  ngOnInit() {
    this.employeeData = employees
    this.employeeData = JSON.parse(JSON.stringify (this.employeeData))
    console.log(this.employeeData)
  }

}