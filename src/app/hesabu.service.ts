import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Hesabu } from './hesabu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
export class HesabuService {
	pathUrl = '127.0.0.1:1505';
  constructor( private http: HttpClient) { }
	pushParmsToCompute(hesabu: Hesabu) : Observable<any>{
    console.log(hesabu);

     return this.http.post(this.pathUrl + '/api/add', hesabu, httpOptions);

   }

}

