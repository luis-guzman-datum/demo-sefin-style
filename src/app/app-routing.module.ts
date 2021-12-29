/**
 * Tipo:
 * ARCHIVO DE CONFIGURACION DE RUTAS
 *
 * Descripción:
 * En este archivo se configura la ruta de cada elemento (componente de tipo pagina) con la cual sera
 * invocado desde su DOM, en dado caso necesite certificar rutas los puede hacer mediante CanActive
 * https://angular.io/api/router/CanActivate
 **/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorClasificadorComponent } from './pages/administrador-clasificador/administrador-clasificador.component';
import { AdministradorPerfilComponent } from './pages/administrador-perfil/administrador-perfil.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { AuthValidComponent } from './pages/auth-valid/auth-valid.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { ChatComponent } from './pages/chat/chat.component';
import { CrudComponent } from './pages/crud/crud.component';
import { FormsComponent } from './pages/forms/forms.component';
import { HomeComponent } from './pages/home/home.component';
import { MapaSitioComponent } from './pages/mapa-sitio/mapa-sitio.component';
import { RegistrosComponent } from './pages/registros/registros.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
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
    path: 'mapa-sitio',
    component: MapaSitioComponent,
  },
  {
    path: 'auth-valid',
    component: AuthValidComponent,
  },
  {
    path: 'administrador-clasificador',
    component: AdministradorClasificadorComponent,
  },
  {
    path: 'administrador-perfil',
    component: AdministradorPerfilComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
