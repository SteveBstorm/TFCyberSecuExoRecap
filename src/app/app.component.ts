import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CyberSecuExoRecap';

  isConnected! : boolean
  constructor(private service : AuthService) {}

  ngOnInit() {
    this.service.loginSubject.subscribe((etat :boolean) => {
      this.isConnected = etat
    })
    this.service.loginSubject.next(this.service.isConnected)
  }

  login() {
    this.service.connect()
  }
  logout() {
    this.service.logout()
  }

}
