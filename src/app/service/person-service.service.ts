import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  private apiURL = 'http://localhost:8080/api/user/';

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getAll():Promise<any>{    
    return this.http.get(this.apiURL, this.httpOptions)
    .toPromise();
  }

  add(person: Person): Promise<any>{
    return this.http.post(this.apiURL, person, this.httpOptions)
    .toPromise();
  }

  delete(idPerson: number): Promise<any>{
    return this.http.delete(this.apiURL + idPerson, this.httpOptions)
    .toPromise();
  }

  getByID(idPerson: number): Promise<any>{
    return this.http.get(this.apiURL + idPerson, this.httpOptions)
    .toPromise();
  }

  update(idPerson: number, person: Person): Promise<any>{
    return this.http.put(this.apiURL + idPerson, person, this.httpOptions)
    .toPromise();
  }
}
