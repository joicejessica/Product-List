import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes =[
  { path: '', component: ProductComponent},
  { path: 'create', component: CreateComponent},
  { path: 'update/:id', component: UpdateComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class ProductRoutingModule { }
