import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  pantalla = 'mensajes';

  mensaje = '';

  constructor() {}

  ngOnInit(): void {}

  mensajes: any[] = [
    {
      estado: 'R',
      mensaje:
        'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks',
      fecha: 'Fri Nov 05 2021 14:39:00 GMT-0600 (Central Standard Time)',
    },
    {
      estado: 'E',
      mensaje:
        'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks',
      fecha: 'Fri Nov 05 2021 14:40:00 GMT-0600 (Central Standard Time)',
    },
  ];

  enviar() {
    let m = {
      estado: 'E',
      mensaje: this.mensaje,
      fecha: new Date(),
    };

    this.mensajes.push(m);

    this.mensaje = '';
    //  $('#mensajes').animate({ scrollTop: $('#fin')[0].scrollHeight }, 1000);

    let el: any = document.getElementById('textarea1');
    el.scrollIntoView();

    setTimeout(() => {
      this.mensajes.push({
        estado: 'R',
        mensaje:
          'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks',
        fecha: new Date(),
      });

      let el: any = document.getElementById('textarea1');
      el.scrollIntoView();
    }, 3000);
  }
}
