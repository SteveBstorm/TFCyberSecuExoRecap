import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personList : Person[] = [
    {name : 'Steve',
    email : 'steve@mail.com',
    birthdate : new Date(1983,7,28),
    favoriteTVShow : ["Kaamelott", "Stargate", "Weeds"]}
  ]

  constructor() { }

  addPerson(newPerson : Person) {
    let index = this.personList.findIndex(p => p.name == newPerson.name)
    if(index < 0)
      this.personList.push(newPerson)
    else
      alert("Personne déjà existante")
  }

  deletePerson(index : number){
    this.personList.splice(index, 1)
  }

  updatePerson(index : number, person : Person) {
    this.personList[index] = person
  }

  getByIndex(index : number) : Person {
    return this.personList[index]
  }
}
