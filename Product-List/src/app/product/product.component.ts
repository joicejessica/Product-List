import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../data-product';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { SelectItem} from 'primeng/components/common/api';
import { Message } from 'primeng/components/common/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ConfirmationService, MessageService]
})

export class ProductComponent implements OnInit {

  cols: any[];
  msgs: Message[] = [];
  products: Product[];
  product: Product;
  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) { }

  getProducts(): void{
    this.productService.getProduct().subscribe
    (
      products =>{ this.products = products}
    );
  }

  ngOnInit() 
  {
    this.getProducts();
    
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'productId', header: 'ProductId' },
      { field: 'name', header: 'Name' },
      { field: 'price', header: 'Price' }
    ];
  }

  delete(id){
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({severity:'success', summary:'Delete Success'});
        this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
        this.productService.deleteProduct(id).subscribe(
          product => {this.product = product}
        );
        console.log(PRODUCTS);      },
      reject: () => {
          this.messageService.add({severity:'info', summary:'Rejected', detail:'You have rejected'});
          this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
  });
  }

}
