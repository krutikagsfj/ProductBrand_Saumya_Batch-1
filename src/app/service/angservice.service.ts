import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AngserviceService {

  constructor(private http:HttpClient) {
   }
   getproductDetails()
   {
    return this.http.get("assets/productBrands.json");
   }
}
