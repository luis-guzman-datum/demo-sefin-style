import {   Component, OnInit } from '@angular/core';

declare var $ :any;
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  
  options: any = {
    position: ['bottom', 'right'],
    showProgressBar: true,
    timeOut: 5000,
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    $('select').formSelect();
    $('.datepicker').datepicker({
      format: 'dd/mm/yyyy',
      i18n: {
        cancel: 'Cancelar',
        done: 'Listo',
        months: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre',
        ],
        monthsShort: [
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul',
          'Ago',
          'Sep',
          'Oct',
          'Nov',
          'Dic',
        ],
        weekdays: [
          'Domingo',
          'Lunes',
          'Martes',
          'Miércoles',
          'Jueves',
          'Viernes',
          'Sábado',
        ],
        weekdaysAbbrev: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      },
    });
  }


}
