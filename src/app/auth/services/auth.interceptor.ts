import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, Subject, throwError} from "rxjs";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public error$: Subject<string> = new Subject<string>();
  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      req = req.clone({
        setHeaders: {
          Authorization: `${this.auth.token}`,
        }
      })
    }
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.auth.logout();
            this.router.navigate(['/auth', 'login'], {
              queryParams: {
                authFailed: true
              }
            })
          }
          this.handleError(error);
          return throwError(error);
        })
      )
  }

  private handleError(error: HttpErrorResponse) {
    const {message} = error.error
    switch (message) {
      case "Invalid credentials" :
        this.error$.next('Неправильное имя пользователя или пароль')
        break
    }
  }
}
