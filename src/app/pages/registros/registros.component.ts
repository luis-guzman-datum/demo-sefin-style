import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { PostModel } from 'src/app/models/post.model';
import { UserModel } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent implements OnInit {

  search = '';
  search2 = '';
  p: number = 1;
  p2: number = 1;

  listaPosts: PostModel[] = [];
  listaUsers: UserModel[] = [];

  options: any = {
    position: ['bottom', 'right'],
    showProgressBar: true,
    timeOut: 5000,
  };

  constructor(private api: ApiService, private _notify: NotificationsService) {}

  ngOnInit(): void {
    this.getPosts();
    this.getUsers();
  }

  getPosts() {
    this.api.getPosts().subscribe(
      (response) => {
        this.listaPosts = response;
      },
      (error) => {
        this._notify.error('Error', 'Lo sentimos, ocurrio un problema al obtener los posts.')
      }
    );
  }

  getUsers() {
    this.api.getUsers().subscribe(
      (response) => {
        this.listaUsers = response;
      },
      (error) => {
        this._notify.error('Error', 'Lo sentimos, ocurrio un problema al obtener los usuarios.')
      }
    );
  }

}
