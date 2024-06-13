import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seller } from '../model/Seller';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  url: string = 'http://localhost:8080/api/v1/sellers'

  constructor(private http: HttpClient) { }

  signIn(seller: Seller):Observable<any>{
    return this.http.post<any>(this.url, seller);
  }
}
