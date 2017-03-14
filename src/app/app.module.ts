import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';
import { DatePickerModule } from 'ng2-datepicker';
import {DropdownModule} from 'ng2-dropdown';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { AppComponent } from './app.component';
import { SalesOrderComponent } from './salesorder/salesorder.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SalesOrderService } from './salesorder.service';
import { OrderViewComponent } from './order-view/order-view.component';
import { NewOrderComponent } from './new-order/new-order.component';
import  myErrorHandler from './myErrorHandler';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesOrderComponent,
    LoginComponent,
    OrderViewComponent,
    NewOrderComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2PaginationModule,
    DatePickerModule,
    DropdownModule,
    Ng2AutoCompleteModule
  ],
  providers: [SalesOrderService, { provide:ErrorHandler, useClass: myErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
