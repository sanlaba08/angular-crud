import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from 'src/app/service/person-service.service';
import { Person } from 'src/app/models/person';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/common/custom.validators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {
  message: string;
  public personForm: FormGroup;
  edit: boolean = false;
  person: Person = {
    id: 0,
    fullname: '',
    email: '',
    age: 0,
    dni: 0
  };

  constructor(private personService: PersonServiceService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.personForm = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      dni: new FormControl('', [CustomValidators.numbersOnly]),
      age: new FormControl('', [CustomValidators.numbersOnly]),
    })

    this.load();
  }

  get fullname() { return this.personForm.get('fullname'); }
  get email() { return this.personForm.get('email'); }
  get dni() { return this.personForm.get('dni'); }
  get age() { return this.personForm.get('age'); }


  load() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.personService.getByID(params.id)
        .then(res => {
          this.personForm.controls['fullname'].setValue(res.fullname);
          this.personForm.controls['email'].setValue(res.email);
          this.personForm.controls['dni'].setValue(res.dni);
          this.personForm.controls['age'].setValue(res.age);
          this.edit = true;
        })
        .catch(error => {
          this.message = "An error has occurred!";
          console.log(error);
        })

    }
  }
  onSubmit() {
    this.person.fullname = this.fullname.value;
    this.person.email = this.email.value;
    this.person.dni = this.dni.value;
    this.person.age = this.age.value;
    this.personService.add(this.person)
      .then(response => {
        this.message = "Person successfully added. You will back to list persons";
        setTimeout(() => {
          this.router.navigateByUrl('/listPersons');
        }, 2000);
      })
      .catch(error => {
        this.message = "An error has occurred!";
        console.log(error);

      })
  }



}


