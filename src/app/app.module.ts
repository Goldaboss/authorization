import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainModule} from "./main/main.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./auth/services/auth.interceptor";

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    MainModule,
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
