import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';

import employees from '../../../assets/employees.json';
import { FlightInfoService } from './../../../../src/app/flight-info.service';

@Component({
  selector: 'app-ts',
  templateUrl: './ts.component.html',
  styleUrls: ['./ts.component.css'],
})
export class TsComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    login: new FormControl('', { validators: [Validators.required] }),
    haslo: new FormControl('', { validators: [Validators.required] }),
  });
  zatwierdzClicked: boolean = false;

  constructor(private router: Router, private auth: AuthService, private flightInfo: FlightInfoService) {}

  ngOnInit() {}

  logIn() {
    let objVenIns = {
      login: this.loginForm.value.login,
      password: this.loginForm.value.haslo,
    };

    console.log('z ts', employees.users);
    console.log(this.flightInfo.adults, this.flightInfo.children, this.flightInfo.olderChildren, this.flightInfo.flightFrom, this.flightInfo.flightTo, this.flightInfo.flightDateLeaving, this.flightInfo.flightDateArrive);

    const result = employees.users.filter(
      (aktualnyElementTablicy) =>
        aktualnyElementTablicy.password === objVenIns.password &&
        aktualnyElementTablicy.login === objVenIns.login
    );
    if (this.loginForm.valid === true && result.length > 0) {
      this.zatwierdzClicked = false;
      console.log(`Logowanie prawidłowe`);
      this.auth.isUserLogin = true;
      this.router.navigate(['/ZalogowanyUzytkownikComponent']);
    } else {
      this.zatwierdzClicked = true;
      this.auth.isUserLogin = false;
      console.log(`Błedny login i/lub haslo`);
    }

    // console.log(result);
    // console.log(result.length > 0 ? 'exists' : 'no');
    // console.log(this.loginForm.value);
    this.loginForm.reset();
  }
}
