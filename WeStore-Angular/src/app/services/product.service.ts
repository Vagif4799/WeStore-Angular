import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../common/product';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]> {

    const searchUrl = `http://localhost:8080/product/category?id=${theCategoryId}`;

    return this.httpClient.get<GetResponse>('https://jsonplaceholder.typicode.com/posts').pipe(
        map(response => response.products)
      );
  }
}

interface GetResponse {
    products: Product[];
}
