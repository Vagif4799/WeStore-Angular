import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductCategory} from '../common/product-category';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  readonly CATEGORY_URL = 'http://localhost:8080/productsCategory';
  products: any;
  productCategories: any;


  constructor(private http: HttpClient) { }

  getPosts() {
    this.products = this.http.get(this.ROOT_URL + '/posts');
    return this.products;
  }

  getPostsByID(theCategoryID: number) {
  const BY_CATEGORY_URL = `${this.ROOT_URL}/posts?id=${theCategoryID}`;
  this.products = this.http.get(BY_CATEGORY_URL);
  return this.products;
  }

  getProductCategories() {
    this.productCategories = this.http.get(this.CATEGORY_URL);
    return this.productCategories;
  }

}

