import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';

export class EventData {
  id: number;
  Subject: string;
  StartTime: Date;
  EndTime: Date;
  IsAllDay: boolean;
}

@Injectable({ providedIn: 'root' })
export class CrudService {

  public eventData: BehaviorSubject<Array<EventData>> = new BehaviorSubject<Array<EventData>>([]);
  private serverUrl: string = 'api/crudevents';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public execute($query: Record<string, any>): void {
    this.getAllData($query).subscribe((response: EventData[]) => this.eventData.next(response));
  }

  /** GET: All data from the server */
  public getAllData($query: Record<string, any>): Observable<EventData[]> {
    return this.http.get<EventData[]>(this.serverUrl)
      .pipe(map((response: EventData[]) => ($query.take > 0 ? response.slice(0, $query.take) : response)))
      .pipe((data: Observable<EventData[]>) => data)
      .pipe(catchError(this.handleError));
  }

  /** POST: Add a new data to the server */
  public addEvent(data: EventData): Observable<EventData> {
    return this.http.post<EventData>(this.serverUrl, data, this.httpOptions).pipe(catchError(this.handleError));
  }

  /** PUT: Update the existing data on the server */
  public updateEvent(data: EventData): Observable<EventData> {
    return this.http.put<EventData>(`${this.serverUrl}/${data.id}`, data, this.httpOptions).pipe(catchError(this.handleError));
  }

  /** DELETE: Delete the data from the server */
  public deleteEvent(data: EventData): Observable<EventData> {
    return this.http.delete<EventData>(`${this.serverUrl}/${data.id}`, this.httpOptions).pipe(catchError(this.handleError));
  }

  /** Method to handle errors */
  private handleError(error: Observable<EventData>): Observable<any> {
    return throwError(() => error);
  }

}

