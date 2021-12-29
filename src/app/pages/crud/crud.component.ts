import { Component, OnInit } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';
import { NotificationsService } from 'angular2-notifications';
import { AlertModel } from 'src/app/models/alert.model';
import { PantallaModel } from 'src/app/models/pantalla.model';
import { UserModel } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';
import { TourCrud as tour, OpcionesPorDefecto } from 'src/app/models/tour-crud';

declare var $: any;

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  //variable que controla el SPA para mostrar contenido
  pantalla: PantallaModel = { pantalla: 'lista' }; // lista, formulario

  listaUsers: UserModel[] = [];

  formulario!: UserModel;

  mostrarTour=true;

  options: any = {
    position: ['bottom', 'right'],
    showProgressBar: true,
    timeOut: 5000,
  };

  constructor(
    private api: ApiService,
    private _notify: NotificationsService,
    private shepherdService: ShepherdService
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  ngAfterViewInit() {
    if (this.mostrarTour) {
      this.shepherdService.defaultStepOptions = OpcionesPorDefecto;
      this.shepherdService.modal = true;
      this.shepherdService.confirmCancel = false;
      this.shepherdService.addSteps(tour);
      this.shepherdService.start();
    }
  }

  /* LISTAR */
  listar() {
    this.api.getUsers().subscribe(
      (response) => {
        this.listaUsers = response;
      },
      (error) => {
        this._notify.error(
          'Error',
          'Lo sentimos, ocurrio un problema al obtener los usuarios.'
        );
      }
    );
  }

  /* CLICKS EN LISTA */
  clickAgregar(output: UserModel) {
    this.pantalla.pantalla = 'formulario';
    this.formulario = output;
  }

  clickModificar(output: UserModel) {
    this.pantalla.pantalla = 'formulario';
    this.formulario = output;
  }

  clickEliminar(output: UserModel) {
    this.alerta = {
      estado: true,
      titulo: '¿Desea eliminar el registro?',
      mensaje: 'Si desa elminar el registro presione la tecla "CONFIRMAR"',
      metodoOK: `this.eliminar()`,
      metodoCancelar: '',
      data: output,
    };
  }

  /* CLICKS EN FORMULARIO */

  clickGuardarModificarForm(output: UserModel) {
    this.pantalla.pantalla = 'lista';
    if (output.id) {
      this.modificar(output);
    } else {
      this.agregar(output);
    }
  }

  clickCancelarForm(output: UserModel) {
    this.pantalla.pantalla = 'lista';
  }

  /* ACCIONES */
  agregar(output: UserModel) {
    this.listaUsers.push(output);
    this._notify.success(
      'Exito',
      'Información recolectada exitosamente y lista para enviar via HTTP (AGREGAR).'
    );
  }

  modificar(output: UserModel) {
    this._notify.success(
      'Exito',
      'Información recolectada exitosamente y lista para enviar via HTTP (MODIFICAR).'
    );
  }

  eliminar() {
    let p = this.listaUsers.indexOf(this.alerta.data);
    if (p !== -1) {
      this.listaUsers.splice(p, 1);
      this._notify.success('Exito', 'Registro eliminado exitosamente.');
    }
  }

  /* ALERTAS SI O NO */

  alerta: AlertModel = { estado: false, mensaje: '', titulo: '' };

  OK(event: AlertModel) {
    eval(event.metodoOK);
    this.alerta = event;
  }

  CANCELAR(event: AlertModel) {
    eval(event.metodoCancelar);
    this.alerta = event;
  }
}
