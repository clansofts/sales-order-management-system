import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { Router } from '@angular/router';
import { CreditCard, Territory, ShipMethod, Currency } from '.././creditcard';
import { SalesOrder } from '.././salesorder';
import { SalesOrderService } from '.././salesorder.service';

@Component({
  moduleId: module.id,
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  orderdate: DateModel;
  duedate: DateModel;
  shipdate: DateModel;
  options: DatePickerOptions;
  shipmethods: ShipMethod[] = [];
  currencies: Currency[] = [];
  salesorder: SalesOrder;
  cards: CreditCard[] = [];
  terr: Territory[] = [];
  @Input() modelcard;
  @Input() modelterr;
  @Input() shipmethod;
   
  constructor(private salesorderService: SalesOrderService,
              private router: Router,
              private _sanitizer: DomSanitizer) 
  { 
    this.options = new DatePickerOptions(); 
  }
  
    
  ngOnInit():void {
    
     if (!localStorage.getItem('access_token')) {
            this.router.navigate(['signin']);
     }
    
      this.salesorderService.GetCreditCards('*').then(x => this.cards = x);
      this.salesorderService.GetTerritories('*').then(x => this.terr = x);
      this.salesorderService.GetShipMethods().then(x => this.shipmethods = x);
      this.salesorderService.GetCurrencies().then(x => this.currencies = x);
  }
  
  autocompleListFormatter = (data: any) : SafeHtml => {
    let html = `<span>${data.CardType} ${data.CardNumber} ${data.ExpMonth} ${data.ExpYear}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
  
  autocompleListFormatterterr = (data: any) : SafeHtml => {
    let html = `<span>${data.Name} ${data.CountryRegionCode} ${data.Group}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
  
  valueChanged(newValue) {
    console.log(this.modelterr["Name"]);
  }
  
  
  SaveOrder(revision: number,
            status: number,
            flagyes: number,
            flagno: number,
            sonumber: number,
            ponumber: number,
            accnumber: string,
            customerid: number,
            salesperson: number,
            billing: string,
            shipping: string,
            subtotal: number,
            taxamount: number,
            freight: number,
            totaldue: number,
            shipmethod: number,
            curr: string)
            {
     /*
     
            let sales: SalesOrder;
            sales = new SalesOrder();
            sales["RevisionNumber"] = revision['value'];
            sales["OrderDate"] = this.orderdate.year + '-' + this.orderdate.month + '-' + this.orderdate.day;
            sales["DueDate"] = this.duedate.year + '-' + this.duedate.month + '-' + this.duedate.day;
            sales["ShipDate"] = this.shipdate.year + '-' + this.shipdate.month + '-' + this.shipdate.day
            sales["Status"] = status['value'];
            sales["OnlineOrderFlag"] = (flagyes['value'] === 1) ? 1 : 0;
            sales["SalesOrderNumber"] = sonumber['value'];
            sales["PurchaseOrderNumber"] = ponumber['value'];
            sales["AccountNumber"] = accnumber['value'];
            sales["CustomerID"] = customerid['value'];
            sales["SalesPersonID"] = salesperson['value'];
            sales["TerritoryID"] = this.modelterr["TerritoryID"];
            sales["ShipMethodID"] = shipmethod; 
            sales["CreditCardID"] = this.modelcard["CreditCardID"];
            sales["CurrencyRateID"] = null;
            sales["SubTotal"] = subtotal['value'];
            sales["TaxAmt"] = taxamount['value'];
            sales["Freight"] = freight['value'];
            sales["TotalDue"] = totaldue['value'];
            sales["Comment"] = null;
     */
            console.log(shipmethod["ShipMethodID"]);
   }
  
  
}
