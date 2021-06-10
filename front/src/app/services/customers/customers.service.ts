import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


import { Customer } from './customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  _HOST = "http://localhost:3000/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient

  ) { }

  customers: Customer[] = [];

 
  public  create(customer: Customer): Observable<Customer> {

    return  this.httpClient
      .post(this._HOST + 'customers', customer)
        .pipe(map((data: any) => {
          console.log('CustomersService responce' + JSON.stringify(data) );
          return data;  //return new Customer(responce)
        })

        )
    
    }

    public  getAll(): Observable<Customer[]> {

      return this.httpClient.get(this._HOST + 'customers/'
          ).pipe(map(data => {

            console.log('CustomersService responce' + JSON.stringify(data) );
             return data
        }), catchError(this.handleError.bind(this)))
      
      }


      public  deleteCustomer(id): Observable<Customer> {
        return this.httpClient.delete(this._HOST + 'customers/' + id).
        pipe(map(data => {
          console.log(data)
          return new Customer(data)
          }))
        }

      public  getById(id): Observable<Customer> {
        console.log(id)
        
        return this.httpClient.get(this._HOST + 'customers/' + id).
          pipe(map(data => {
            console.log(data)
            return new Customer(data)
        }))
      }

      public  update(id, customer: Customer): Observable<Customer> {
        console.log(id)
        return this.httpClient.put(this._HOST + 'customers/' + id, customer).
        pipe(map(data => {
          return new Customer(data)
        }))
        
      }
  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
