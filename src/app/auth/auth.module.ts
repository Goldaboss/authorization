import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegComponent} from "./components/reg/reg.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthOverviewComponent} from './components/auth-overview/auth-overview.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AuthOverviewComponent,
    RegComponent,
    LoginComponent,
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule {}
