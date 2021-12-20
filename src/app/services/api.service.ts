import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../models/post.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlServidor = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts():Observable<PostModel[]> {
    let url = this.urlServidor + '/posts';
    return this.http.get<PostModel[]>(url);
  }

  getUsers():Observable<UserModel[]> {
    let url = this.urlServidor + '/users';
    return this.http.get<UserModel[]>(url);
  }


}
