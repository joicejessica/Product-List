import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product';
import { ProductService} from '../product.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [MessageService]
})
export class UpdateComponent implements OnInit {

  prodform: FormGroup;
  submitted: boolean;
  id: number;
  msgs: Message[] = [];
  product: Product= new Product();
  constructor(private route: ActivatedRoute,
              private prodService: ProductService,
              private location: Location,
              private messageService: MessageService,
              private fb: FormBuilder) { }

  getProductById(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.prodService.getProductById(id).subscribe(product=>{
      this.product = product;
    });
    console.log(id);
  }

  ngOnInit() {
    this.getProductById();
    this.prodform = this.fb.group({
      'productId': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required)
    });
  }

  save(value: string){
    this.submitted = true;
    this.msgs = [];
    this.msgs.push({severity:'success', detail:'Update Product Success !!'});
    const id = +this.route.snapshot.paramMap.get('id');
    this.prodService.updateProduct(id, this.product).subscribe(product=>{
      product = this.product
      this.id = id
    });
    this.messageService.add({severity:'success', summary:'Update Success'});
    console.log(this.product)
    console.log(id)
  }

  goBack(){
    this.location.back();
  }
}
