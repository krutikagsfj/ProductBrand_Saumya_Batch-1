import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
@Component({
  selector: 'app-product-brand',
  templateUrl: './product-brand.component.html',
  styleUrls: ['./product-brand.component.css']
})
export class ProductBrandComponent implements OnInit {

  constructor(private s:ServiceService) { }
  data;
  

  ngOnInit() {
    this.s.getList().subscribe(res =>
      {
        this.data=res;
        console.log(res)
      },err=>
      {
        console.log(err);
      }
      )
  }

}
