import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
