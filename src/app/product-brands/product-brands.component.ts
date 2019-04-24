import { Component, OnInit } from '@angular/core';
import { AngserviceService } from 'src/app/service/angservice.service';
@Component({
  selector: 'app-product-brands',
  templateUrl: './product-brands.component.html',
  styleUrls: ['./product-brands.component.css']
})
export class ProductBrandsComponent implements OnInit {
product;
  constructor(private prod:AngserviceService) { }
  ngOnInit() {
    this.prod.getproductDetails()
    .subscribe(res=>{
      this.product=res;
      console.log(this.product);
    })
  }

}
