import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRouteParams = Number(routeParams.get("productId"));

    //find the product that corresponds to the productId
    this.product = products.find(
      product => product.id === productIdFromRouteParams
    );
  }
}
