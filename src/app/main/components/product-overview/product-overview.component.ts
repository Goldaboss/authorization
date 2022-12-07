import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductOverviewComponent implements OnInit {

  public product$ = this.productService.product$;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this.productService.getProduct(productId)
  }
}
