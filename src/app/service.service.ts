import { Injectable } from '@angular/core';
import {
  HttpClient
}
from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private h:HttpClient) { }
  getList()
  {
    let url="assests/productBrands.json"
    return this.h.get(url);
  }
}
