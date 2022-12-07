import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProductModel} from "../models/product.model";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class ProductService {

  public product$ = new BehaviorSubject<ProductModel>(null)
  constructor(private http: HttpClient) {
  }

  public getProduct(id?: number): void {
    this.http.get<ProductModel>(`https://dummyjson.com/auth/products/${id}`).subscribe((resp) => {
      this.product$.next(resp);
    })
  }
}
