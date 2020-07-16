import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductCategory} from '../common/product-category';
import {Product} from '../common/product';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly ROOT_URL = 'http://localhost:8080';
  readonly CATEGORY_URL = this.ROOT_URL + '/productsCategory';
  readonly BY_CATEGORY_ID_URL = this.ROOT_URL + '/product/category';
  readonly SEARCH_BY_NAME_URL = this.ROOT_URL + '/product/name';
  readonly PRODUCT_BY_ID_URL = this.ROOT_URL + '/product';

  products: any;
  productCategories: any;

  constructor(private http: HttpClient) { }

  getPostsByID(theCategoryID: number) {
  const BY_CATEGORY_URL = `${this.BY_CATEGORY_ID_URL}?id=${theCategoryID}`;
  this.products = this.http.get(BY_CATEGORY_URL);
  return this.products;
  }

  getProductListPaginate(thePage: number,
                         thePageSize: number,
                         theCategoryID: number) : Observable<GetResponseProducts> {
    const BY_CATEGORY_URL = `${this.BY_CATEGORY_ID_URL}?id=${theCategoryID}` + `&page=${thePage}&size=${thePageSize}`;
    this.products = this.http.get<GetResponseProducts>(BY_CATEGORY_URL);
    return this.products;
  }

  getProductCategories() {
    this.productCategories = this.http.get(this.CATEGORY_URL);
    return this.productCategories;
  }

  searchProducts(theKeyword: string) {
    this.products = this.http.get(`${this.SEARCH_BY_NAME_URL}?name=${theKeyword}`);
    return this.products;
  }

  getProduct(theProductId: number) {

    const productURL = `${this.PRODUCT_BY_ID_URL}?id=${theProductId}`;
    return this.http.get<Product>(productURL);

  }

}

interface GetResponseProducts {
  content: {
    products: Product;
  },
  pageable: {
    pageSize: number,
    pageNumber: number
  },
  totalElements: number
}

