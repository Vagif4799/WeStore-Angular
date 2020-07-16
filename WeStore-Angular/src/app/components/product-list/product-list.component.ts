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

  products: Product[] = [];
  currentCategoryID: number = 1;
  previousCategoryID: number = 1;
  searchMode: boolean = false;

  // Pagination Fields
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;

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

    if (this.previousCategoryID != this.currentCategoryID) {
      this.thePageNumber = 1;
    }

    this.previousCategoryID = this.currentCategoryID;

    console.log(`theCurrentCategoryID=${this.currentCategoryID}, thePageNumber=${this.thePageNumber}`);

    this.productService.getProductListPaginate(this.thePageNumber-1,
                                                        this.thePageSize,
                                                        this.currentCategoryID)
      .subscribe(this.processResult());

  }

  private processResult() {
    return data => {
      this.products = data.content;
      this.thePageNumber = data.pageable.pageNumber + 1;
      this.thePageSize = data.pageable.pageSize;
      this.theTotalElements = data.totalElements;
    }
  }
}
