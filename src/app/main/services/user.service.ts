import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class UserService {

  public user$ =new BehaviorSubject<any>(null)

  get userId(): string | null {
    return localStorage.getItem('userId');
  }

  constructor(
    private http: HttpClient
    ) {
  }

  public getUser(): void {
    this.http.get(`https://dummyjson.com/auth/users/${this.userId}`).subscribe((user) => {
      this.user$.next(user);
    })
  }
}
