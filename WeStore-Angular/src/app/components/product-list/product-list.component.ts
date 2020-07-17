import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products: Product[];
  currentCategoryID: number;
  searchMode: boolean;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    //this.products = this.productService.getPosts();
    this.route.paramMap.subscribe(
      () => {
        this.listProducts();
      }
    );
  }

  listProducts() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();

    }

  }

  handleSearchProducts() {

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');
    // now search for the product
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    );

  }

  handleListProducts() {

    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryID = +this.route.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryID = 1;
    }

    this.productService.getPostsByID(this.currentCategoryID).subscribe(
      data => {
        this.products = data;
      }
    )
  }

  addToCart(theProduct: Product) {
    console.log(`${theProduct.name} added to the Cart -> ${theProduct.unitPrice}`);
    //todo - complete the function
  }

}
