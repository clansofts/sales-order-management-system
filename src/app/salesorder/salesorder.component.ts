import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { SalesOrder } from '.././salesorder';
import { SalesOrderService } from '.././salesorder.service';
import { SalesDetailList } from '.././salesdetaillist';

@Component({
  selector: 'app-salesorder',
  templateUrl: './salesorder.component.html',
  styleUrls: ['./salesorder.component.css']
})
  
export class SalesOrderComponent implements OnInit {

  salesorder: SalesOrder[] = [];
  salesdetail: SalesDetailList[] = [];
  show: boolean = false;
      
  constructor(private salesorderService: SalesOrderService,
              private route: ActivatedRoute,
              private router: Router) { }

  onSelect(id: number): void {
    this.salesorderService.getOrderDetail(id).then(sal => this.salesdetail = sal);
      this.show = true;
  }
  
  onSearch(id: number): void {
    this.salesorder = [];
    this.salesorderService.GetOrderById(id).then(x => this.salesorder[0] = x);
  }
  
  onFullSearch(): void {
    this.getOrders();
  }
  
  getOrders(): void {
    this.salesorderService.getAllOrders().then(salesorder => this.salesorder = salesorder);
  }
  
  logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('token_type');
        localStorage.removeItem('userName');
        this.router.navigate(['signin']);
  }
    
  ngOnInit() {
    
    if (!localStorage.getItem('access_token')) {
            this.router.navigate(['signin']);
    }
    
    this.getOrders();
  }
}