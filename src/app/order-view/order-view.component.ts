import { Component, OnInit } from '@angular/core';
import { SalesOrder } from '.././salesorder';
import { SalesOrderService } from '.././salesorder.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
  salesorder: SalesOrder[] = [];
  
  constructor(private salesorderService: SalesOrderService,
              private route: ActivatedRoute,
              private router: Router) { }
 
  ngOnInit(): void {
    
     if (!localStorage.getItem('access_token')) {
            this.router.navigate(['signin']);
    }
    
    
      this.salesorder = [];
      this.route.params
      .switchMap((params: Params) => this.salesorderService.GetOrderById(+params['id']))
      .subscribe(s => this.salesorder[0] = s);
      console.log(this.route.snapshot.data['id']);
    }
}
