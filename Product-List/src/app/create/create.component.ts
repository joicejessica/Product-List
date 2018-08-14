import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Product } from '../product';
import { ProductService } from '../product.service';
// import { Identifiers } from '@angular/compiler';
// import { SelectItem } from 'primeng/components/common/api';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [MessageService]
})

export class CreateComponent implements OnInit {

  productform: FormGroup;
  submitted: boolean;
  isNull = '';
  msgs: Message[] = [];
  products: Product[];
  product: Product = new Product();
  
  constructor(private location: Location,
              private productService: ProductService,
              private messageService: MessageService,
              private fb: FormBuilder) {}
        

  ngOnInit() {
    this.productform = this.fb.group({
      'productId': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required)
    });
  }

  create(value: string)
  {
    this.submitted = true;
    this.messageService.add({severity:'success', detail:'Create Product Success!!'});
    this.productService.createProduct(this.product).subscribe(
        product => {this.product = product}
    );
    console.log(this.product)
  }

  goBack()
  {
    this.location.back();
  }

}
