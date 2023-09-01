import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isConnected! : boolean
  constructor(private service : AuthService) {}
  ngOnInit() {
    this.service.loginSubject.subscribe((etat :boolean) => {
      this.isConnected = etat
    })
    this.service.loginSubject.next(this.service.isConnected)
  }
}
