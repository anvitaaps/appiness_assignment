import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  get_data(url): Observable<any> {
    return this.http.get(url,   {
      headers: new HttpHeaders({'Content-Type': 'application/json'}), 
    })
    .pipe(map(
      (data) => data
    ));
  }
}
