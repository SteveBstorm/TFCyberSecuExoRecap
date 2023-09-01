import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { AuthService } from 'src/app/services/auth.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  listPerson! : Person[]
  isConnected! : boolean
  constructor(
    private service : PersonService,
    private router : Router,
    private authService : AuthService
    ){}

  ngOnInit() {
    this.listPerson = this.service.personList

    this.authService.loginSubject.subscribe((etat :boolean) => {
      this.isConnected = etat
    })
    this.authService.loginSubject.next(this.authService.isConnected)
  }

  delete(index : number) {
    this.service.deletePerson(index)
  }

  update(index : number) {
    this.router.navigate(["update", index])
  }
}
