import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SalesOrderComponent } from './salesorder/salesorder.component';
import { LoginComponent } from './login/login.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
    { path: 'salesorder', component: SalesOrderComponent },
    { path: '', component: SalesOrderComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'order-view/:id', component: OrderViewComponent },
    { path: 'neworder', component: NewOrderComponent },
    { path: 'signin', component: SigninComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}

