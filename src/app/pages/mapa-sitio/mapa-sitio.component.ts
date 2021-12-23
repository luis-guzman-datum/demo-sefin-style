import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mapa-sitio',
  templateUrl: './mapa-sitio.component.html',
  styleUrls: ['./mapa-sitio.component.scss']
})
export class MapaSitioComponent implements OnInit {

  getIngresosPorColectorData: any = { ingresosConfirmados: [] };
  getCierreBancoComisionesDetalleData: any = { ingresosConfirmados: [] };


  range: any = '';
  search = '';
  search2 = '';
  infoPantalla = { pantalla: 'lista', selected: {nombreColector:'', nombreRecaudador:'', montoComisionAPagar:0} };
  p: number = 1;
  p2: number = 1;


  constructor() {
   
  }

  ngOnInit(): void {
    let hoy = new Date(new Date());
    let menos7 = new Date(new Date());
    menos7.setDate(menos7.getDate() - 7);
    this.getIngresosPorColector(hoy, menos7);
  }

  cambioDeFecha(dates: any) {
    

    this.getIngresosPorColector(dates[0], dates[1]);
  }

  getIngresosPorColector(fechaInicio: any, fechaFin: any) {
    this.getIngresosPorColectorData.ingresosConfirmados=[
      {
        "nombreColector": "BANCO DE OCCIDENTE S.A.",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 2078406.99,
        "montoComisionAPagar": 9384.5
      },
      {
        "nombreColector": "BANCO DE OCCIDENTE S.A.",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 454011.63,
        "montoComisionAPagar": 3590.76
      },
      {
        "nombreColector": "BANCO DE AMERICA CENTRAL HONDURAS S.A.",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 454011.63,
        "montoComisionAPagar": 3590.76
      },
      {
        "nombreColector": "BANCO DE AMERICA CENTRAL HONDURAS S.A.",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 212459.76,
        "montoComisionAPagar": 5286.95
      },
      {
        "nombreColector": "BANCO FINANCIERA COMERCIAL HONDUREÑA S.A",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 454011.63,
        "montoComisionAPagar": 3590.76
      },
      {
        "nombreColector": "BANCO HONDUREÑO DEL CAFE S.A.",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 138355.77,
        "montoComisionAPagar": 1658.19
      },
      {
        "nombreColector": "BANCO HONDUREÑO DEL CAFE S.A.",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 19042.42,
        "montoComisionAPagar": 470
      },
      {
        "nombreColector": "BANCO HSBC HONDURAS, S.A.",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 138355.77,
        "montoComisionAPagar": 1658.19
      },
      {
        "nombreColector": "BANCO HSBC HONDURAS, S.A.",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 19042.42,
        "montoComisionAPagar": 470
      },
      {
        "nombreColector": "BANCO LAFISE S.A",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 28010,
        "montoComisionAPagar": 737.5
      },
      {
        "nombreColector": "BANCO LAFISE S.A",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 17592.76,
        "montoComisionAPagar": 670
      },
      {
        "nombreColector": "BANCO PROMERICA S.A.",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 28010,
        "montoComisionAPagar": 737.5
      },
      {
        "nombreColector": "BANCO PROMERICA S.A.",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 17592.76,
        "montoComisionAPagar": 670
      },
      {
        "nombreColector": "BANCO PROMERICA S.A.",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 44046,
        "montoComisionAPagar": 1725
      },
      {
        "nombreColector": "BANCO PROCREDIT",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 28010,
        "montoComisionAPagar": 737.5
      },
      {
        "nombreColector": "BANCO PROCREDIT",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 17592.76,
        "montoComisionAPagar": 670
      },
      {
        "nombreColector": "BANCO PROCREDIT",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 44046,
        "montoComisionAPagar": 1725
      },
      {
        "nombreColector": "BANCO PROCREDIT",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 26550,
        "montoComisionAPagar": 1310
      },
      {
        "nombreColector": "BANCO NACIONAL DE DESARROLLO AGRICOLA",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 28010,
        "montoComisionAPagar": 737.5
      },
      {
        "nombreColector": "BANCO NACIONAL DE DESARROLLO AGRICOLA",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 17592.76,
        "montoComisionAPagar": 670
      },
      {
        "nombreColector": "BANCO NACIONAL DE DESARROLLO AGRICOLA",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 44046,
        "montoComisionAPagar": 1725
      },
      {
        "nombreColector": "BANCO NACIONAL DE DESARROLLO AGRICOLA",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 26550,
        "montoComisionAPagar": 1310
      },
      {
        "nombreColector": "BANCO DEL PAIS S.A",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 28010,
        "montoComisionAPagar": 737.5
      },
      {
        "nombreColector": "BANCO DEL PAIS S.A",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 17592.76,
        "montoComisionAPagar": 670
      },
      {
        "nombreColector": "BANCO DEL PAIS S.A",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 44046,
        "montoComisionAPagar": 1725
      },
      {
        "nombreColector": "BANCO DEL PAIS S.A",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 26550,
        "montoComisionAPagar": 1310
      },
      {
        "nombreColector": "BANCO DEL PAIS S.A",
        "nombreRecaudador": "TGR1",
        "montoRecaudado": 454011.63,
        "montoComisionAPagar": 3590.76
      }
    ];
   
  }



 

  seleccionarBanco(data: any) {
    this.infoPantalla = { pantalla: 'seleccionado', selected: data };

    this.getCierreBancoComisionesDetalleData={"detalleComisionDetalle": [
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9194471",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9194493",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9193211",
        "codigoFormulario": "TGR-1",
        "monto": 294,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12102,
        "rubro": "Control Migratorio",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9194503",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9194177",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9194186",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9194192",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9162871",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9194291",
        "codigoFormulario": "TGR-1",
        "monto": 150,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9191549",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9193663",
        "codigoFormulario": "TGR-1",
        "monto": 150,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12120,
        "rubro": "Servicios de Auténticas y Traducciones",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9193662",
        "codigoFormulario": "TGR-1",
        "monto": 150,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12120,
        "rubro": "Servicios de Auténticas y Traducciones",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9175302",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9175364",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9176900",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9194347",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9194355",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9196422",
        "codigoFormulario": "TGR-1",
        "monto": 150,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9195386",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9197852",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9197855",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9195663",
        "codigoFormulario": "TGR-1",
        "monto": 150,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9197860",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9197864",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9197858",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9195233",
        "codigoFormulario": "TGR-1",
        "monto": 150,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9195235",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9197909",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9197922",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9197927",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9197936",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9196805",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9195251",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9195262",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9195275",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9196812",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9195287",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9198226",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9196561",
        "codigoFormulario": "TGR-1",
        "monto": 300,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12120,
        "rubro": "Servicios de Auténticas y Traducciones",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9196570",
        "codigoFormulario": "TGR-1",
        "monto": 8200,
        "calculoComision": 20.5,
        "porcentaje": 0.0025,
        "codigoRubro": 12404,
        "rubro": "Conmutas y Multas Judiciales",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9198261",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9195569",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9195089",
        "codigoFormulario": "TGR-1",
        "monto": 250,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 15101,
        "rubro": "Venta de Impresos",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9198046",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9198048",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9196885",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9195370",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9198303",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9197114",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      },
      {
        "nombreColector": "BANCO DE LOS TRABAJADORES S.A.",
        "nombreRecaudador": "TGR1",
        "codigoDocumento": "9198619",
        "codigoFormulario": "TGR-1",
        "monto": 200,
        "calculoComision": 10,
        "porcentaje": 0.0025,
        "codigoRubro": 12218,
        "rubro": "Registro Nacional de las Personas",
        "fechaRecaudacion": "13/12/2021"
      }
    ]};
  }
}
