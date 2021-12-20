import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
declare var $ :any;

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  options: any = {
    position: ['bottom', 'right'],
    showProgressBar: true,
    timeOut: 5000,
  };

  constructor(private _notify:NotificationsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    $('.modal').modal();
    
    this.warn();
    this.info();
    this.error();
    this.success();
  }

  cerrarModal(){
    $('.modal').modal('hide');
  }

  warn(){
    this._notify.warn('Titulo', 'Cuerpo del mensaje');
  }

  success(){
    this._notify.success('Titulo', 'Cuerpo del mensaje');
  }

  error(){
    this._notify.error('Titulo', 'Cuerpo del mensaje');
  }
  info(){
    this._notify.info('Titulo', 'Cuerpo del mensaje');
  }


}
