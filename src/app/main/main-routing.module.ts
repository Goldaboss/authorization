import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {ProductsOverviewComponent} from "./components/products-overview/products-overview.component";
import {ProductOverviewComponent} from "./components/product-overview/product-overview.component";
import {UserOverviewComponent} from "./components/user-overview/user-overview.component";

const routes: Routes = [
  {path: '', component: MainComponent, children: [
      {path: '', redirectTo: 'products', pathMatch: 'full'},
      {path: 'products', component: ProductsOverviewComponent},
      {path: 'user', component: UserOverviewComponent},
      {path: 'product/:id', component: ProductOverviewComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
