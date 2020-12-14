import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../admin/users/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/users';
  }
  // public findAll(): Observable<User[]> {
  //   return this.http.get<User[]>(this.userUrl);
  // }
  // tslint:disable-next-line:typedef
  public save(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }
  // tslint:disable-next-line:typedef
  getUsers() {
    return this.http.get<User[]>('http://localhost:8080/users');
  }
  // tslint:disable-next-line:typedef
  addUser(newUser: User) {
    return this.http.post<User>('http://localhost:8080/users', newUser);
  }
}
