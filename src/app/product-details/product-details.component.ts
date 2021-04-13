import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("Your item " + product.name + " has been added to the cart!");
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRouteParams = Number(routeParams.get("productId"));

    //find the product that corresponds to the productId
    this.product = products.find(
      product => product.id === productIdFromRouteParams
    );
  }
}
