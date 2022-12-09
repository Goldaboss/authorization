import {NgModule} from "@angular/core";
import { MainOverviewComponent } from "./components/main-overview/main-overview.component";
import {ProductsComponent} from "./components/products-overview/components/products/products.component";
import {UserInfoComponent} from "./components/user-overview/components/user-info/user-info.component";
import {ProductComponent} from "./components/product-overview/components/product/product.component";
import {MainRoutingModule} from "./main-routing.module";
import {CommonModule} from "@angular/common";
import {AuthGuard} from "../auth/services/auth.guard";
import {ProductsService} from "./services/products.service";
import {UserService} from "./services/user.service";
import {ProductService} from "./services/product.service";
import { ProductsOverviewComponent } from './components/products-overview/products-overview.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';

@NgModule({
  declarations: [
    MainOverviewComponent,
    ProductsOverviewComponent,
    ProductsComponent,
    ProductOverviewComponent,
    ProductComponent,
    UserInfoComponent,
    UserOverviewComponent,
  ],
  imports: [
    MainRoutingModule,
    CommonModule
  ],
  providers: [
    AuthGuard,
    ProductService,
    ProductsService,
    UserService
  ]
})
export class MainModule {
}
