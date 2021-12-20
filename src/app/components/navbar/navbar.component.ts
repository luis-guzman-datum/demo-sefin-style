import { Component, OnInit } from '@angular/core';
import { Menu, MenuSidebar, PerfilUsuario } from 'src/app/models/barra-nevegacion';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuSidebar: PerfilUsuario= MenuSidebar;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.dropdown-trigger').dropdown();
  }
}
