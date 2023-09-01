import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  listPerson! : Person[]
  constructor(
    private service : PersonService,
    private router : Router
    ){}

  ngOnInit() {
    this.listPerson = this.service.personList
  }

  delete(index : number) {
    this.service.deletePerson(index)
  }

  update(index : number) {
    this.router.navigate(["update", index])
  }
}
