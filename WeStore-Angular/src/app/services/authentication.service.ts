import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private host = environment.apiUrl;
  private token: string;
  private loggedInUsername: string;

  constructor(private http: HttpClient) { }

  login(user: User): Observable<HttpResponse<any> | HttpErrorResponse> {
    return this.http.post<HttpResponse<any> | HttpErrorResponse>
    (`${this.host}/user/login`, user, {observe: 'response'});
  }

  register(user: User): Observable<HttpResponse<User> | HttpErrorResponse> {
    return this.http.post<HttpResponse<User> | HttpErrorResponse>
    (`${this.host}/user/register`, user);
  }

  logOut(): void {
    this.token = null;
    this.loggedInUsername = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('users');
  }
}
