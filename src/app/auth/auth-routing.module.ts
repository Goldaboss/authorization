import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthOverviewComponent} from "./components/auth-overview/auth-overview.component";
import {LoginComponent} from "./components/login/login.component";
import {RegComponent} from "./components/reg/reg.component";

const routes: Routes = [
  {path: '', component: AuthOverviewComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'reg', component: RegComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  AuthRoutingModule {}
