import { Component, OnInit } from '@angular/core';
import { FlightInfoService } from './../../../../src/app/flight-info.service';
import { AuthService } from './../../../../src/app/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from './../../../../src/app/weather.service';

@Component({
  selector: 'app-wyszukiwarka',
  templateUrl: './wyszukiwarka.component.html',
  styleUrls: ['./wyszukiwarka.component.css'],
})
export class WyszukiwarkaComponent implements OnInit {
  wybranaOpcja1: any = '';
  wybranaOpcja2: any = '';

  date1: string = '';
  date2: string = '';

  minDate1: string = '';
  minDate2: string = '';

  people: string = '';
  olderChildren: string = '';
  children: string = '';

  flightFrom: any[] = [
    { code: 'KTW', city: 'Katowice', disabled: false },
    { code: 'CDG', city: 'Paryż', disabled: false },
    { code: 'JFK', city: 'Nowy Jork', disabled: false },
  ];

  flightTo: any[] = [
    { code: 'KTW', city: 'Katowice', disabled: false },
    { code: 'CDG', city: 'Paryż', disabled: false },
    { code: 'JFK', city: 'Nowy Jork', disabled: false },
  ];

  nazwaFormularza;

  constructor(
    private authService: AuthService,
    private flightInfo: FlightInfoService,
    private readonly router: Router,
    private weatherService: WeatherService
  ) {
    this.minDate1 = this.todaysDate();
    this.minDate2 = this.todaysDate();
    this.date1 = this.todaysDate();
    this.date2 = this.todaysDate();

    this.nazwaFormularza = new FormGroup({
      wybranaOpcja1: new FormControl('', { validators: [Validators.required] }),
      wybranaOpcja2: new FormControl('', { validators: [Validators.required] }),
      people: new FormControl('', { validators: [Validators.required] }),
      olderChildren: new FormControl(''),
      children: new FormControl(''),
      departure: new FormControl('', { validators: [Validators.required] }),
      arrive: new FormControl('', { validators: [Validators.required] }),
    });
    this.nazwaFormularza.setValidators(this.customValidator());
  }

  ngOnInit() {}

  blokujOpcje1() {
    //alert(this.nazwaFormularza.get('wybranaOpcja1').value)
    console.log('abc', this.nazwaFormularza.get('wybranaOpcja1').value);
    this.weatherService.setData(
      this.nazwaFormularza.get('wybranaOpcja1').value
    );

    this.flightTo.forEach(
      (city) =>
        (city.disabled = city.code === this.wybranaOpcja1 ? true : false)
    );
    this.flightInfo.flightFrom = this.wybranaOpcja1;
    console.log(this.wybranaOpcja1);
    // this.weatherService.setData(this.wybranaOpcja1);
    this.flightInfo.flightTo = this.wybranaOpcja2;
  }

  blokujOpcje2() {
    this.weatherService.setData2(
      this.nazwaFormularza.get('wybranaOpcja2').value
    );
    this.flightFrom.forEach(
      (city) =>
        (city.disabled = city.code === this.wybranaOpcja2 ? true : false)
    );

    this.flightInfo.flightFrom = this.wybranaOpcja1;
    this.flightInfo.flightTo = this.wybranaOpcja2;
  }

  todaysDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = this.padZero(today.getMonth() + 1);
    const day = this.padZero(today.getDate());
    return `${year}-${month}-${day}`;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }

  updateMinDate() {
    console.log(this.date1);
    if (new Date(this.date1) >= new Date(this.date2)) {
      console.log('date1 > date2');
      this.minDate1 = this.date2; //juz ok
      this.minDate2 = this.date1;
      this.date1 = this.date1;
      this.date2 = this.date1;
    } else {
      console.log('date1 < date2');
      this.minDate1 = this.date2; //juz ok
      this.minDate2 = this.date2;
      this.date2 = this.date1;
      this.date1 = this.date1;
    }
    this.flightInfo.flightDateLeaving = this.date1;
  }

  updateMinDate2() {
    console.log(this.date2);

    if (new Date(this.date1) > new Date(this.date2)) {
      console.log('date1 > date2');
      this.minDate2 = this.date2; //juz ok
      this.minDate1 = this.date2;
      this.date1 = this.date1;
      this.date2 = this.date1;
    } else {
      console.log('date1 < date2');
      this.minDate2 = this.date1; //juz ok
      this.minDate1 = this.date1;
      this.date1 = this.date1;
      this.date2 = this.date2;
    }
    this.flightInfo.flightDateArrive = this.date2;
  }

  zatwierdz() {
    console.log(this.authService.isUserLogin);
    if (!this.authService.isUserLogin) {
      alert('Musisz sie najpierw zalogować!');
      return;
    }

    this.flightInfo.formularzWyszukiwania = this.nazwaFormularza.value;
    this.router.navigate(['/wyborMiejsca']);
    console.log('this.nazwaFormularza.value', this.nazwaFormularza.value);
  }

  peopleToFlight() {
    this.flightInfo.adults = this.people;
    this.flightInfo.olderChildren = this.olderChildren;
    this.flightInfo.children = this.children;
  }

  checkDepartureSelect() {}

  customValidator() {}
}
