import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonServiceService } from 'src/app/service/person-service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  message: string = '';
  personList: Array<Person> = [];
  constructor(private personService: PersonServiceService) { }

  ngOnInit(): void {
    this.personService.getAll()
      .then(response => {
        this.personList = response;
      })
      .catch(error => {
        console.log(error);
      })
  }

  deletePerson(idPerson: number) {
    if (confirm('¿Are you sure that delete user?')) {
      this.personService.delete(idPerson)
        .then(response => {
          this.ngOnInit();
        })
        .catch(error => {
        })
    }

  }


}




