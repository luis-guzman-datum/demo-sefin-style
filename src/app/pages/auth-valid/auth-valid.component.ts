import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-auth-valid',
  templateUrl: './auth-valid.component.html',
  styleUrls: ['./auth-valid.component.scss'],
})
export class AuthValidComponent implements OnInit, AfterViewInit {

  // variables de configuracion de paginador y filtro
  search = '';
  p: number = 1;

  //lista de datos autorizados
  lista:any[]=[
    {
      "id": 4,
      "codrecaudador": {
        "codrecaudador": 600,
        "nombrerecaudador": "TGR1",
        "descripcionrecaudador": "TGR1",
        "estado": 1,
        "creadopor": "user-01",
        "creadoen": 1625588357000,
        "modificadopor": null,
        "modificadoen": 1638884013000
      },
      "montominimo": 0,
      "montomaximo": 3125,
      "porcentaje": 0.0025,
      "valordefecto": 10,
      "estado": 1,
      "creadopor": "R.ORTIZ",
      "creadoen": 1635373422000,
      "modificadopor": null,
      "modificadoen": 1638981731000,
      "descripcion": "Comision Valor Fijo (L10.00) por recibos menor a L. 3,125.00 xxxxxxxxx",
      "factormayor": "Y"
    },
    {
      "id": 5,
      "codrecaudador": {
        "codrecaudador": 600,
        "nombrerecaudador": "TGR1",
        "descripcionrecaudador": "TGR1",
        "estado": 1,
        "creadopor": "user-01",
        "creadoen": 1625588357000,
        "modificadopor": null,
        "modificadoen": 1638884013000
      },
      "montominimo": 3125.01,
      "montomaximo": 1000000,
      "porcentaje": 0.0025,
      "valordefecto": 0,
      "estado": 1,
      "creadopor": "R.ORTIZ",
      "creadoen": 1635373422000,
      "modificadopor": null,
      "modificadoen": 1638981753000,
      "descripcion": "Comision Formulario En Linea (0.0025) Mayor a 3125.00",
      "factormayor": "Y"
    },
    {
      "id": 21,
      "codrecaudador": {
        "codrecaudador": 500,
        "nombrerecaudador": "AAH",
        "descripcionrecaudador": "AAH",
        "estado": 1,
        "creadopor": "user-01",
        "creadoen": 1625588159000,
        "modificadopor": null,
        "modificadoen": 1638884023000
      },
      "montominimo": 0,
      "montomaximo": 3450.25,
      "porcentaje": 0,
      "valordefecto": 10,
      "estado": 1,
      "creadopor": "R.ORTIZ",
      "creadoen": 1635373422000,
      "modificadopor": null,
      "modificadoen": null,
      "descripcion": "Comision Valor Fijo (L10.00) por recibos menor a L. 3,125.00",
      "factormayor": "N"
    },
    {
      "id": 22,
      "codrecaudador": {
        "codrecaudador": 500,
        "nombrerecaudador": "AAH",
        "descripcionrecaudador": "AAH",
        "estado": 1,
        "creadopor": "user-01",
        "creadoen": 1625588159000,
        "modificadopor": null,
        "modificadoen": 1638884023000
      },
      "montominimo": 3450.26,
      "montomaximo": 2000000,
      "porcentaje": 0.0025,
      "valordefecto": 0,
      "estado": 1,
      "creadopor": "R.ORTIZ",
      "creadoen": 1635373422000,
      "modificadopor": null,
      "modificadoen": 1638981777000,
      "descripcion": "Comision Formulario En Linea (0.0025) Mayor a 3125.00",
      "factormayor": "Y"
    }
  ];

  //lista de datos pendientes de autorizar
  listaP:any[]=[
    {
      "id": 6,
      "codrecaudador": {
        "codrecaudador": 600,
        "nombrerecaudador": "TGR1",
        "descripcionrecaudador": "TGR1",
        "estado": 1,
        "creadopor": "user-01",
        "creadoen": 1625588357000,
        "modificadopor": null,
        "modificadoen": 1638884013000
      },
      "montominimo": 0,
      "montomaximo": 3125,
      "porcentaje": 0.0025,
      "valordefecto": 10,
      "estado": 1,
      "creadopor": "R.ORTIZ",
      "creadoen": 1635373422000,
      "modificadopor": null,
      "modificadoen": 1638981731000,
      "descripcion": "Comision Valor Fijo (L10.00) por recibos menor a L. 3,125.00 xxxxxxxxx",
      "factormayor": "Y"
    },
    {
      "id": 40,
      "codrecaudador": {
        "codrecaudador": 500,
        "nombrerecaudador": "AAH",
        "descripcionrecaudador": "AAH",
        "estado": 1,
        "creadopor": "user-01",
        "creadoen": 1625588159000,
        "modificadopor": null,
        "modificadoen": 1638884023000
      },
      "montominimo": 3450.26,
      "montomaximo": 2000000,
      "porcentaje": 0.0025,
      "valordefecto": 0,
      "estado": 1,
      "creadopor": "R.ORTIZ",
      "creadoen": 1635373422000,
      "modificadopor": null,
      "modificadoen": 1638981777000,
      "descripcion": "Comision Formulario En Linea (0.0025) Mayor a 3125.00",
      "factormayor": "Y"
    }
  ];
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    $('.tabs').tabs();
  }
}
