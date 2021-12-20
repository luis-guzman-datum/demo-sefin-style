import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { AuthChekValidComponent } from './pages/auth-chek-valid/auth-chek-valid.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { ChatComponent } from './pages/chat/chat.component';
import { CrudComponent } from './pages/crud/crud.component';
import { FormsComponent } from './pages/forms/forms.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrosComponent } from './pages/registros/registros.component';
import { TypeT24Component } from './pages/type-t24/type-t24.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'registros',
    component: RegistrosComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'alerts',
    component: AlertsComponent,
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'charts',
    component: ChartsComponent,
  },
  {
    path: 'crud',
    component: CrudComponent,
  },
  {
    path: 'type-t24',
    component: TypeT24Component,
  },
  {
    path: 'auth-chek-valid',
    component: AuthChekValidComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
