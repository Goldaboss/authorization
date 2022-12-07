import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserOverviewComponent implements OnInit {

  public user$ = this.userService.user$;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
   this.userService.getUser();
  }
}
