import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValueFromArray } from 'rxjs';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  myForm! : FormGroup
  constructor(
      private builder : FormBuilder,
      private service : PersonService,
      private router : Router){}

  ngOnInit() {
    this.myForm = this.builder.group({
      name : [null, Validators.required],
      email : [null, Validators.email],
      birthdate : [null, this.ageValidator()],
      favoriteTVShow : this.builder.array([])
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
    this.service.addPerson(this.myForm.value)
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
