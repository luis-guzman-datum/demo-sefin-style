import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoApiService {

  private urlServidor = ``;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8'});
    let options = { headers: headers };
    let url = this.urlServidor + `/all`;
    return this.http.get<any>(url).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  post(body:any): Observable<any[]> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8'});
    let options = { headers: headers };
    let url = this.urlServidor ;
    return this.http.post<any[]>(url, body).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  put(body:any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', });
    let options = { headers: headers };
    let url = this.urlServidor ;
    return this.http.put<any>(url, body).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  delete(id:string): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8'});
    let options = { headers: headers };
    let url = this.urlServidor + `?codigo=${id}`;
    return this.http.delete<any>(url).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}


