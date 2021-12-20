import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-auth-chek-valid',
  templateUrl: './auth-chek-valid.component.html',
  styleUrls: ['./auth-chek-valid.component.scss']
})
export class AuthChekValidComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $('select').formSelect();
    $('.tabs').tabs();
    
  }

}
