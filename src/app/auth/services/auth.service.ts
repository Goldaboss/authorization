import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../models/user.model";
import {Observable, throwError, catchError, Subject} from "rxjs";
import {tap} from "rxjs/operators"

@Injectable()
export class AuthService {

  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  get token(): string | any {
    return localStorage.getItem('token')
  }

  login(user: User): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify({username: user.name, password: user.password});

    return this.http.post(`https://dummyjson.com/auth/login`, body, {'headers': headers})
      .pipe(
        tap(this.setToken),
        catchError(this.handleError)
      )
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private handleError(error: HttpErrorResponse) {
    const {message} = error.error
    switch (message) {
      case "Invalid credentials" :
        this.error$.next('Неправильное имя пользователя или пароль')
        break
    }
    return throwError(error);
  }

  private setToken(response: any | null) {
    if (response) {
      localStorage.setItem('token', response.token)
    } else {
      localStorage.clear()
    }
  }
}
