import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  currentPerson! : Person

  constructor(
    private service : PersonService,
    private ar : ActivatedRoute
  ){}

  ngOnInit() {
    let id = this.ar.snapshot.params["id"]
    this.currentPerson = this.service.getByIndex(id)
  }
}
