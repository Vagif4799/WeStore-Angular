import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductCategory} from '../common/product-category';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly ROOT_URL = 'http://localhost:8080';
  readonly PRODUCTS_URL = this.ROOT_URL + '/products';
  readonly CATEGORY_URL = this.ROOT_URL + '/productsCategory';
  readonly BY_CATEGORY_ID_URL = this.ROOT_URL + '/product/category';
  products: any;
  productCategories: any;


  constructor(private http: HttpClient) { }

  getProducts() {
    this.products = this.http.get(this.PRODUCTS_URL);
    return this.products;
  }

  getPostsByID(theCategoryID: number) {
  const BY_CATEGORY_URL = `${this.BY_CATEGORY_ID_URL}?id=${theCategoryID}`;
  this.products = this.http.get(BY_CATEGORY_URL);
  return this.products;
  }

  getProductCategories() {
    this.productCategories = this.http.get(this.CATEGORY_URL);
    return this.productCategories;
  }

}

