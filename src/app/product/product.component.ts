import { Component } from '@angular/core';

import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  public productList: any;
  public filterCategory: any;
  searchKey: string = '';
  constructor(private api: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a: any) => {
        if (
          a.category === "men's Shoes"
        ) {
          a.category = 'MenShoes';
        }
        if (
            a.category === "women's Shoes"
          ) {
            a.category = 'WomenShoes';
          }
        if (
            a.category === "kids's Shoes"
          ) {
            a.category = 'Kids';
          }
        Object.assign(a, { quantity: 1, total: a.price });
        console.log(this.productList);
      });
    });
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }

  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }

 
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
