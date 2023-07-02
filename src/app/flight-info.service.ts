import { Injectable } from '@angular/core';

@Injectable()
export class FlightInfoService {
  flightDateLeaving: any = '';
  flightDateArrive: any = '';
  flightFrom: any = '';
  flightTo: any = '';
  adults: any = '';
  olderChildren: any = '';
  children: any = '';


  formularzWyszukiwania:any
  constructor() {}
}
