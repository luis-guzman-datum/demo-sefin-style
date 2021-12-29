import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { AlertModel } from 'src/app/models/alert.model';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss'],
})
export class CrudListComponent implements OnInit {
  @Input() listaUsers!: UserModel[];

  @Output() clickAgregar = new EventEmitter();
  @Output() clickModificar = new EventEmitter();
  @Output() clickEliminar = new EventEmitter();


  //variable para filtro y paginancion
  search = '';
  p: number = 1;

 

  constructor() {}

  ngOnInit(): void {}

  

 
}
