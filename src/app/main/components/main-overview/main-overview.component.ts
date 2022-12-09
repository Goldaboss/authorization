import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-main-overview',
  templateUrl: './main-overview.component.html',
  styleUrls: ['./main-overview.component.scss']
})
export class MainOverviewComponent implements OnInit {

  constructor(
    private router: Router,
    public auth:AuthService,
  ) { }

  ngOnInit(): void {
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/auth', 'login'])
  }
}
