import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../interfaces/pet';

@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  petDataSource = 'https://uxt-infrastructure-dev-c-styleguide.s3.eu-central-1.amazonaws.com/json/frontend-challenge.json';

  constructor(
   private http: HttpClient) {
  }

  getPetData():Observable<Pet>{
    return this.http.get<Pet>(this.petDataSource);
  }
}
