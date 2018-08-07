import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule} from './product-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UpdateComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    ProductRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
