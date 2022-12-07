import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule} from "./auth/auth.module";
import {MainModule} from "./main/main.module";
import {AuthGuard} from "./auth/services/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', loadChildren: () => MainModule, canActivate: [AuthGuard]},
  {path: 'auth', loadChildren: () => AuthModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
