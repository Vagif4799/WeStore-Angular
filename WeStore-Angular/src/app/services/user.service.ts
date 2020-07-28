import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../common/user';
import {Form} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host = environment.apiUrl;


  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[] | HttpErrorResponse> {
    return this.http.get<User[]>(`${this.host}/user/list`);
  }

  addUser(formData: FormData): Observable<User | HttpErrorResponse> {
    return this.http.post<User>(`${this.host}/user/add`, formData);
  }

  updateUser(formData: FormData): Observable<User | HttpErrorResponse> {
    return this.http.post<User>(`${this.host}/user/update`, formData);
  }

  resetPassword(email: string): Observable<any | HttpErrorResponse> {
    return this.http.get(`${this.host}/user/resetPassword/${email}`);
  }

  updateProfileImage(formData: FormData): Observable<HttpEvent<User> | HttpErrorResponse> {
    return this.http.post<User>(`${this.host}/user/updateProfileImage`, formData,
      {
        reportProgress: true,
        observe: 'events'
             });
  }
}
