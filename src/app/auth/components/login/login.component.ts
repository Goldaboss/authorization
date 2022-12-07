import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user.model";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public form: FormGroup | any;
  public messageError = '';

  constructor(
    public auth: AuthService,
    private router: Router,
    public route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl('kminchelle', [Validators.required]),
      userPassword: new FormControl('0lelplR', [Validators.required])
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.form.disable()

    const user: User = {
      name: this.form.value.userName,
      password: this.form.value.userPassword
    }


    this.auth.login(user).subscribe({
      next: (user) => {
        localStorage.setItem('userId', user.id);
        this.router.navigate(['/']);
      },
      error: () => {
        this.form.enable();
      }
    })
  }
}
