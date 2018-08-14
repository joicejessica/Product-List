import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService 
{

  id: number;
  name: string;
  price: number;
  productId: number;
  version: number;
  product: Product;

  constructor(private httpClient: HttpClient) { } 

  
  getProduct(): Observable<any>
  {
    return this.httpClient.get("http://localhost:4200/api/productPage/all")
  }

  getProductById(id): Observable<any>
  {
    return this.httpClient.get("http://localhost:4200/api/productPage/view/"+id)
  }

  createProduct(product): Observable<any>
  {
    return this.httpClient.post<Product>("http://localhost:4200/api/productPage/create", product)
  }

  deleteProduct(id): Observable<any>
  {
    return this.httpClient.delete("http://localhost:4200/api/productPage/delete/"+id)
  }

  updateProduct(id, product): Observable<any>
  {
    return this.httpClient.put("http://localhost:4200/api/productPage/update/"+id, product)
  }
}
