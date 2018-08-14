import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule} from './product-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { KeyFilterModule} from 'primeng/keyfilter';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { LoginComponent } from './login/login.component';
import { CardModule } from 'primeng/card';
import { RegistrationComponent } from './registration/registration.component';
import { PasswordModule } from 'primeng/password';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UpdateComponent,
    CreateComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ProductRoutingModule,
    FormsModule,
    PanelModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FieldsetModule,
    ConfirmDialogModule,
    MessageModule,
    MessagesModule,
    KeyFilterModule,
    HttpClientModule,
    ToastModule,
    ReactiveFormsModule,
    CardModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
