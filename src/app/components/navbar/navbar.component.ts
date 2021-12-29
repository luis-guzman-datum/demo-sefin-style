import { Component, OnInit } from '@angular/core';
import { Menu, MenuSidebar, PerfilUsuario } from 'src/app/models/barra-nevegacion';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  // lista de opciones de menu que pueden ser usados en el sistema
  // esta se puede dejar local o consumir desde un services
  menuSidebar: PerfilUsuario= MenuSidebar;
  periodo=2021;
  
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.dropdown-trigger').dropdown();
    $('select').formSelect();
  }
}
