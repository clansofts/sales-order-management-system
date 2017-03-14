import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { SalesOrder } from './salesorder';
import { SalesDetailList } from './salesdetaillist';
import 'rxjs/add/operator/map';
import { CreditCard, Territory, ShipMethod, Currency } from './creditcard';
import { Observable } from 'rxjs';

@Injectable()
export class SalesOrderService {
  
  private headers = new Headers({'Content-Type':'application/json'});
  
  constructor(private http: Http) {}
  
  getAllOrders(): Promise<SalesOrder[]> {
    return this.http.get('http://localhost:8082/api/salesorder')
               .toPromise()
               .then(response => response.json() as SalesOrder[])
               .catch(this.handleError);
  };
  
  getOrderDetail(id: number): Promise<SalesDetailList[]> {
    return this.http.get(`http://localhost:8082/api/salesdetail/${id}`)
           .toPromise()
           .then(response => response.json() as SalesDetailList[])
           .catch(this.handleError);
  };

  GetOrderById(id: number): Promise<SalesOrder> {
    return this.http.get(`http://localhost:8082/api/salesorder/${id}`)
           .toPromise()
           .then(response => response.json() as SalesDetailList)
           .catch(this.handleError);
  };
  
  GetShipMethods(): Promise<ShipMethod[]> {
    return this.http.get(`http://localhost:8082/api/lookup?name=xyz`)
           .toPromise()
           .then(response => response.json() as ShipMethod[])
           .catch(this.handleError);
  };
  
    GetCurrencies(): Promise<Currency[]> {
    return this.http.get(`http://localhost:8082/api/lookup?currency=xyz`)
           .toPromise()
           .then(response => response.json() as Currency[])
           .catch(this.handleError);
  };
    
  
  GetCreditCards(term: string): Promise<CreditCard[]> {
    return this.http.get(`http://localhost:8082/api/lookup?search=${term}`)
           .toPromise()
           .then(response => response.json() as CreditCard[])
           .catch(this.handleError);
  };
   
  GetTerritories(term: string): Promise<Territory[]> {
    return this.http.get(`http://localhost:8082/api/lookup?term=${term}`)
           .toPromise()
           .then(response => response.json() as Territory[])
           .catch(this.handleError);
  };
   
  SaveRecord(salesorder: SalesOrder): Promise<SalesOrder> {
    return this.http
           .post(`http://localhost:8082/api/salesorder/SaveOrder`, JSON.stringify({salesorder}), {headers: this.headers})
           .toPromise()
           .then(res => res.json())
           .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
  };
 
}
