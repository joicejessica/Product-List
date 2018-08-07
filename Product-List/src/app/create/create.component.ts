import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PRODUCTS } from '../data-product';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  inputId: number;
  inputName: string;
  inputPrice: number;
  inputProductid: number;

  products: Product[]; 
  
  constructor(private location: Location,
              private productService: ProductService) { }

  ngOnInit() {
  }

  create()
  {
    PRODUCTS.push({
      id: this.inputId,
      name: this.inputName,
      price: this.inputPrice,
      product_id: this.inputProductid
    })
    console.log(PRODUCTS);
    // this.products = this.productService.getProduct();

  }

  goBack()
  {
    this.location.back();
  }

}
