import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador-clasificador',
  templateUrl: './administrador-clasificador.component.html',
  styleUrls: ['./administrador-clasificador.component.scss']
})
export class AdministradorClasificadorComponent implements OnInit {

  //variable para el filter
  search = '';
  p: number = 1;

  // data que se muestra en tablas
  clasificadorData=[
    {
      selected:true, 
      noDoc:'001',
      opeacion:'CREACION',
      estado:'EN REGISTRO',
      auditoria:false
    },
    {
      selected:false, 
      noDoc:'002',
      opeacion:'CREACION',
      estado:'AUTORIZADO',
      auditoria:true
    },
    {
      selected:false, 
      noDoc:'003',
      opeacion:'MODIFICACION',
      estado:'AUTORIZADO',
      auditoria:true
    },
    {
      selected:false, 
      noDoc:'004',
      opeacion:'CREACION',
      estado:'EN REGISTRO',
      auditoria:false
    },
    {
      selected:false, 
      noDoc:'005',
      opeacion:'BAJA',
      estado:'EN REGISTRO',
      auditoria:false
    },
    {
      selected:false, 
      noDoc:'006',
      opeacion:'CREACION',
      estado:'RECHAZADO',
      auditoria:true
    },
    {
      selected:false, 
      noDoc:'007',
      opeacion:'BAJA',
      estado:'EN REGISTRO',
      auditoria:false
    },{
      selected:false, 
      noDoc:'008',
      opeacion:'CREACION',
      estado:'AUTORIZADO',
      auditoria:false
    },
    {
      selected:false, 
      noDoc:'009',
      opeacion:'MODIFICACION',
      estado:'AUTORIZADO',
      auditoria:true
    },
    {
      selected:false, 
      noDoc:'010',
      opeacion:'CREACION',
      estado:'EN REGISTRO',
      auditoria:false
    },
    {
      selected:false, 
      noDoc:'011',
      opeacion:'BAJA',
      estado:'EN REGISTRO',
      auditoria:true
    },
    {
      selected:false, 
      noDoc:'012',
      opeacion:'CREACION',
      estado:'RECHAZADO',
      auditoria:true
    },
    {
      selected:false, 
      noDoc:'013',
      opeacion:'BAJA',
      estado:'EN REGISTRO',
      auditoria:true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
