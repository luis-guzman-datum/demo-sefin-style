import { LowerCasePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Impuesto, ListaImpuestos } from 'src/app/models/data-impuesto.model';
import { UserForm } from 'src/app/models/json4Form';
import { UserModel } from 'src/app/models/user.model';
declare var $: any;
@Component({
  selector: 'app-type-t24',
  templateUrl: './type-t24.component.html',
  styleUrls: ['./type-t24.component.scss'],
})
export class TypeT24Component implements OnInit, AfterViewInit {
  listaImpuestos: Impuesto[] = ListaImpuestos;

  formularioDinamico: any[] = [];

  listaOpcioneDepartamentos: any[] = [
    { value: '1', titulo: 'Gwenborough' },
    { value: '2', titulo: 'Sonsonate' }
  ];

  form: UserModel = UserForm;
  formOpciones: any = {
    invisibles: [
      { ruta: 'id' }
    ],
    labels: [
      { ruta: 'id', titulo: 'Identificador' },
      { ruta: 'name', titulo: 'Nombre' },
      { ruta: 'username', titulo: 'Usuario' },
      { ruta: 'address.cityNumberSelect', titulo: 'Ciudad Litsa' },
    ],
    select: [
      {
        ruta: 'select',
        lista: [
          { value: '1', titulo: 'Select1' },
          { value: '2', titulo: 'Select2' },
        ]    
      },
      {
        ruta: 'address.cityNumberSelect',
        lista: [
          { value: 1, titulo: 'Gwenborough' },
          { value: 2, titulo: 'Sonsonate' },
        ] 
      }
    ],
    textarea: [{ ruta: 'textarea' }],
    calendar: [],
  };

  search = '';
  p: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.convertirJson(UserForm);
    this.label2({
      "id": "addressCITY",
      "ruta": "address.city",
      "value": "Gwenborough"
    });
    this.label2({
      "id": "addressCITYNUMBERSELECT",
      "ruta": "address.cityNumberSelect",
      "value": 1
    });
  }

  ngAfterViewInit() {
    $('.tabs').tabs();
    $('select').formSelect();
  }

  label(formControl: any): string {
    for(let d of this.formOpciones.labels){
      if(formControl.ruta== d.ruta){
        return d.titulo;
      }
    }
     return formControl.id;
  }

  invisible(formControl: any): boolean {
    for(let d of this.formOpciones.labels){
      if(formControl.ruta== d.ruta){
        return false;
      }
    }
     return true;
  }

  label2(formControl: any): string {

    for(let d of this.formOpciones.labels){
      if(formControl.ruta== d.ruta){
        return d.titulo;
      }
    }
     return formControl.id;
    
  }

  seleccionarTipoDeElemento(formControl: any): any {

    for(let d of this.formOpciones.select){
      if(formControl.ruta== d.ruta){
        return { type: 'select', array: d.lista };
      }
    }

    for(let d of this.formOpciones.textarea){
      if(formControl.ruta== d.ruta){
        return { type: 'textarea', array: d.lista };
      }
    }
    return { type: 'text', array: [] };

  }

  selected(d:any,s:any):boolean{
    if(d.value==s.value){
      return true;
    }else{
      return false;
    }
  }

  convertirJson(json: any) {
    for (let key in json) {
      if (typeof json[key] != 'object') {
        this.formularioDinamico.push({ id: key, ruta: key, value: json[key] });
      } else {
        for (let k2 in json[key]) {
          if (typeof json[key][k2] != 'object') {
            this.formularioDinamico.push({
              id: key + k2.toUpperCase(),
              ruta: key + '.' + k2,
              value: json[key][k2],
            });
          } else {
            for (let k3 in json[key][k2]) {
              if (typeof json[key][k2][k3] != 'object') {
                this.formularioDinamico.push({
                  id: key + k2.toUpperCase() + k3,
                  ruta: key + '.' + k2 + '.' + k3,
                  value: json[key][k2][k3],
                });
              }
            }
          }
        }
      }
    }
  }
}
