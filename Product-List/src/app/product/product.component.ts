import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../data-product';
import { ProductService } from '../product.service';
import { Product } from '../product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  product: Product;
  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  getProducts(): void{
    this.products = this.productService.getProduct();
  }

  ngOnInit() 
  {
    this.getProducts();
  }

  delete(id){
    this.product = this.productService.getProductsById(id);
    const index = PRODUCTS.indexOf(this.product);
    PRODUCTS.splice(index,1);
  }

}
