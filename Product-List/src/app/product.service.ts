import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './data-product';



@Injectable({
  providedIn: 'root'
})
export class ProductService 
{

  id: number;
  name: string;
  price: number;
  prduct_id: number;
  
  inputId: number;
  inputName: string;
  inputPrice: number;
  inputProductid: number;
  product: Product[];

  constructor() { } 

  getProduct(): Product[]
  {
    return (PRODUCTS);
  }

  getProductsById(id: number): Product{
    return (PRODUCTS.find(product=>product.id===id));
  }

  // createProduct()
  // {
  //   PRODUCTS.push({
  //     id: this.inputId,
  //     name: this.inputName,
  //     price: this.inputPrice,
  //     product_id: this.inputProductid
  //   })
  //   console.log(PRODUCTS);
  // }

 


}
