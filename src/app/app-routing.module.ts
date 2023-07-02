import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ZalogowanyUzytkownikComponent } from './components/zalogowany-uzytkownik/zalogowany-uzytkownik.component';
import { TsComponent } from './components/ts/ts.component';
import { WyborMiejscaComponent } from './components/wybor-miejsca/wybor-miejsca.component';

const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  { path: 'one', component: TsComponent },
  {
    path: 'ZalogowanyUzytkownikComponent',
    component: ZalogowanyUzytkownikComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'wyborMiejsca',
    component: WyborMiejscaComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
