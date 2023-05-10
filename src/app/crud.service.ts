import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs-compat/Observable';
import 'rxjs-compat/add/operator/map';
import { Subject } from 'rxjs-compat/Subject';
import { Customer, UpdateData } from './customer';
import { DataStateChangeEventArgs, DataSourceChangedEventArgs } from '@syncfusion/ej2-schedule';
import { map } from 'rxjs/internal/operators/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CrudService extends Subject<DataStateChangeEventArgs>  {

  private customersUrl = 'api/customers';  // URL to web api

  constructor(private http: HttpClient) {
    super();
  }

  public execute(state: any): void {
      this.getAllData(state).subscribe(x => super.next(x as DataStateChangeEventArgs));
  }

  /** GET all data from the server */
  getAllData( state ?: any): Observable<any[]> {
    return this.http.get<Customer[]>(this.customersUrl)
      .pipe(
        map((response: any) => ({
          result: state.take > 0 ? response.slice(0, state.take) : response,
          count: response.length
       })))
      .pipe((data: any) => data);
  }

  updateData(data: UpdateData) {
    return this.http.post(this.customersUrl, data);
  }

  /** POST: add a new record  to the server */
  addRecord(state: any): Observable<Customer> {
    const data = state.data[0];
    // you can apply empty string instead of state.data to get failure(error)
    return this.http.post<Customer>(this.customersUrl, data, httpOptions);
  }

  /** DELETE: delete the record from the server */
  deleteRecord(state: any): Observable<Customer> {
    const id = state.data[0].id;
    const url = `${this.customersUrl}/${id}`;

    return this.http.delete<Customer>(url, httpOptions);
  }

  /** PUT: update the record on the server */
  updateRecord(state: any): Observable<any> {
    const data = state.data[0];
    return this.http.put(this.customersUrl, data, httpOptions);
  }  

}

