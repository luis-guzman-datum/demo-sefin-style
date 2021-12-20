import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.scss'],
})
export class CrudFormComponent implements OnInit {

  @Output() clickGuardarModificarForm = new EventEmitter();
  @Output() clickCancelarForm = new EventEmitter();

  @Input()
  get formulario(): UserModel {
    return this._localModel;
  }
  set formulario(formulario: UserModel) {
      if(formulario){
          this.formularioGrupo.get('id')?.setValue(formulario?.id);
          this.formularioGrupo.get('name')?.setValue(formulario?.name);
          this.formularioGrupo.get('username')?.setValue(formulario?.username);
          this.formularioGrupo.get('email')?.setValue(formulario?.email);
          this.formularioGrupo.get('phone')?.setValue(formulario?.phone);
          this.formularioGrupo.get('website')?.setValue(formulario?.website);
          this.formularioGrupo.get('address.street')?.setValue(formulario?.address.street);
          this.formularioGrupo.get('address.suite')?.setValue(formulario?.address.suite);
          this.formularioGrupo.get('address.city')?.setValue(formulario?.address.city);
          this.formularioGrupo.get('address.zipcode')?.setValue(formulario?.address.zipcode);
          this.formularioGrupo.get('address.geo.lat')?.setValue(formulario?.address.geo.lat);
          this.formularioGrupo.get('address.geo.lng')?.setValue(formulario?.address.geo.lng);
          this.formularioGrupo.get('company.catchPhrase')?.setValue(formulario?.company.catchPhrase);
          this.formularioGrupo.get('company.name')?.setValue(formulario?.company.name);
          this.formularioGrupo.get('company.bs')?.setValue(formulario?.company.bs);
      }
  }

  _localModel!: UserModel;

  /* MAPEO DE MODELO PARA FORMULARIO */
  formularioGrupo: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    website: new FormControl('', [Validators.required]),
    address: new FormGroup({
      street: new FormControl('', [Validators.required]),
      suite: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required]),
      geo: new FormGroup({
        lat: new FormControl('', [Validators.required]),
        lng: new FormControl('', [Validators.required]),
      }),
    }),
    company: new FormGroup({
      catchPhrase: new FormControl('', ),
      name: new FormControl('', [Validators.required]),
      bs: new FormControl('', ),
    }),
  });

  options: any = {
    position: ['bottom', 'right'],
    showProgressBar: true,
    timeOut: 5000,
  };


  constructor(private _notify: NotificationsService) {}

  ngOnInit(): void {}

  guardar(){
    if(this.formularioGrupo.valid){
      this.clickGuardarModificarForm.emit(this.formularioGrupo.value);
    }
    else{
      this._notify.warn('Advertencia', 'Favor revisar formulario.');
    }
  }
}
