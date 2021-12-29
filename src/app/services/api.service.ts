/**
 * Tipo:
 * SERVICES
 *
 * Descripción:
 * Demo de peticiones http haciendo uso del HttpClient de angular y de la api https://jsonplaceholder.typicode.com
 **/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../models/post.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //ruta del server, este se puede complementar de una variable de ambiente
  urlServidor = 'https://jsonplaceholder.typicode.com';

  //Implementacion de clase HttpClient para peticiones
  constructor(private http: HttpClient) {}

  //metodo GET para obenter de manera basica un array de POSTS de noticias desplegados en JSON placeholder
  getPosts():Observable<PostModel[]> {
    let url = this.urlServidor + '/posts';
    return this.http.get<PostModel[]>(url);
  }

  //metodo GET para obenter de manera basica un array de USERS desplegados en JSON placeholder
  getUsers():Observable<UserModel[]> {
    let url = this.urlServidor + '/users';
    return this.http.get<UserModel[]>(url);
  }



}
