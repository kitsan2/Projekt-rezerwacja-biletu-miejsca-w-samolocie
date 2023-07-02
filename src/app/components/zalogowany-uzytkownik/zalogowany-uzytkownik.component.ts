import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zalogowany-uzytkownik',
  templateUrl: './zalogowany-uzytkownik.component.html',
  styleUrls: ['./zalogowany-uzytkownik.component.css'],
})
export class ZalogowanyUzytkownikComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  logOut() {
    this.authService.isUserLogin = false;
    this.router.navigate(['/one']);
  }
}
