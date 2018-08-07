import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product';
import { PRODUCTS } from '../data-product';
import { ProductService} from '../product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  product: Product;
  constructor(private route: ActivatedRoute,
              private prodService: ProductService,
              private location: Location) { }

  getProductById(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.product = this.prodService.getProductsById(id);
    console.log(id);
    console.log(this.product);
  }

  ngOnInit() {
    this.getProductById();
  }

  save(){
    const id = +this.route.snapshot.paramMap.get('id');
    let updated = {id: this.product.id, producId: this.product.product_id, name: this.product.name, price: this.product.price}
  }

  delete(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.product = this.prodService.getProductsById(id);
    const index = id-1;
    PRODUCTS.splice(index, 1);
    console.log(PRODUCTS);
  }

  goBack(){
    this.location.back();
  }
}
