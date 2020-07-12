import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  products: any;


  constructor(private http: HttpClient) { }

  getPosts() {
    this.products = this.http.get(this.ROOT_URL + '/posts');
    return this.products;
  }
}

