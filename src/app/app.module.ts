import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { RegistrosComponent } from './pages/registros/registros.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CrudComponent } from './pages/crud/crud.component';
import { SiNoComponent } from './components/si-no/si-no.component';
import { CrudFormComponent } from './pages/crud/crud-form/crud-form.component';
import { CrudListComponent } from './pages/crud/crud-list/crud-list.component';
import { TypeT24Component } from './pages/type-t24/type-t24.component';
import { AuthChekValidComponent } from './pages/auth-chek-valid/auth-chek-valid.component';
import { MapaSitioComponent } from './pages/mapa-sitio/mapa-sitio.component';
import { AuthValidComponent } from './pages/auth-valid/auth-valid.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    HomeComponent,
    FilterPipe,
    FooterComponent,
    RegistrosComponent,
    AlertsComponent,
    FormsComponent,
    ChatComponent,
    ButtonsComponent,
    ChartsComponent,
    CrudComponent,
    SiNoComponent,
    CrudFormComponent,
    CrudListComponent,
    TypeT24Component,
    AuthChekValidComponent,
    MapaSitioComponent,
    AuthValidComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
