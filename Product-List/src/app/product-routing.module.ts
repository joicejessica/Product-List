import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes =[
  { path: '', redirectTo: "/login", pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'product', component: ProductComponent},
  { path: 'create', component: CreateComponent},
  { path: 'update/:id', component: UpdateComponent},
  { path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class ProductRoutingModule { }
