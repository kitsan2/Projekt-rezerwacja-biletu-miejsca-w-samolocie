import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { Es6Component } from './components/es6/es6.component';
import { HttpComponent } from './components/http/http.component';
import { TsComponent } from './components/ts/ts.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { ZalogowanyUzytkownikComponent } from './components/zalogowany-uzytkownik/zalogowany-uzytkownik.component';
import { WyszukiwarkaComponent } from './components/wyszukiwarka/wyszukiwarka.component';
import { FlightInfoService } from './flight-info.service';
import { CurrentDateComponent } from './components/current-date/current-date.component';
import { CommonModule } from '@angular/common';
import { WyborMiejscaComponent } from './components/wybor-miejsca/wybor-miejsca.component';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './components/weather/weather.component';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    Es6Component,
    HttpComponent,
    TsComponent,
    ZalogowanyUzytkownikComponent,
    WyszukiwarkaComponent,
    CurrentDateComponent,
    WyborMiejscaComponent,
    WeatherComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AuthService, AuthGuard, FlightInfoService, WeatherService],
})
export class AppModule {}
