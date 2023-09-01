import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  currentPerson! : Person
  myForm! : FormGroup
  currentId! : number
  constructor(
    private builder : FormBuilder,
    private service : PersonService,
    private ar : ActivatedRoute,
    private router : Router
  ){}

  ngOnInit() {
    this.currentId = this.ar.snapshot.params["id"]
    this.currentPerson = this.service.getByIndex(this.currentId)

    this.myForm = this.builder.group({
      name : [this.currentPerson.name, Validators.required],
      email : [this.currentPerson.email, Validators.email],
      birthdate : [null, this.ageValidator()],
      favoriteTVShow : this.builder.array([])
    })

    this.myForm.controls["birthdate"].patchValue(new Date(this.currentPerson.birthdate))

    this.currentPerson.favoriteTVShow?.forEach(s => {
      this.getShowArray().push(new FormControl(s, Validators.required))
    })
  }

  getShowArray() : FormArray {
    return this.myForm.get('favoriteTVShow') as FormArray
  }

  addTvShow() {
    this.getShowArray().push(new FormControl(null, Validators.required))
  }

  removeTvShow(index : number) {
    this.getShowArray().removeAt(index)
  }

  savePerson() {
    this.service.updatePerson(this.currentId, this.myForm.value)
    this.router.navigate(["list"]);
  }

  ageValidator() : ValidatorFn {
    return (control : AbstractControl) => {
      if(control.value == null) return null
      let currentDate : Date = new Date()
      let birthDate : Date = new Date(control.value)
      if(currentDate.getFullYear() - birthDate.getFullYear() >= 13)
        return null

      return {dateError : 'Trop jeune, age minimum : 13ans'}
    }
  }
}
