import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProductModel, ProductsResponseModel} from "../models/product.model";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class ProductsService {

  public productData$ = new BehaviorSubject<ProductModel[]>([]);

  constructor(private http: HttpClient) {
  }

  public getList(): void {
    this.http.get<ProductsResponseModel>('https://dummyjson.com/auth/products').subscribe((resp) => {
        this.productData$.next(resp.products);
      }
    );
  }
}
