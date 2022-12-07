import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../../../models/user.model";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent implements OnInit {

  @Input() public user: UserModel;

  constructor() { }

  ngOnInit(): void {
  }
}
