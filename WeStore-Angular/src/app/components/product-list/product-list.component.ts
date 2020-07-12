import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../common/product';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  products: any;

  constructor(private http: HttpClient) {
  }

  getPosts() {
    this.products = this.http.get(this.ROOT_URL + '/posts');
  }

}
