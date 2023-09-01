import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get isConnected() : boolean {
    return localStorage.getItem("status") ? true : false
  }
  loginSubject :  Subject<boolean> = new Subject<boolean>()

  connect() {
    localStorage.setItem("status", "toto");
    this.loginSubject.next(this.isConnected)
  }

  logout() {
    localStorage.clear();
    this.loginSubject.next(this.isConnected)
  }
  constructor() { }
}
