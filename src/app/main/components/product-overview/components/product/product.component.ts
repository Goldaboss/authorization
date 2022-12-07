import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

    @Input() public product: ProductModel;


  constructor() {}

  ngOnInit(): void {
  };
}
