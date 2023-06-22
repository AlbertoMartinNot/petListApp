import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../interfaces/pet';
import { petConstants } from '../constants/pet.constants';


@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  petDataSource = petConstants.PET_SOURCE_ENDPOINT;

  constructor(
   private http: HttpClient) {
  }

  getPetData():Observable<Pet>{
    return this.http.get<Pet>(this.petDataSource);
  }
}
