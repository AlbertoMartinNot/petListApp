import { TestBed } from '@angular/core/testing';

import { PetDataService } from './pet-data.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PetDataService', () => {
  let service: PetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpClient, HttpHandler]
    });
    service = TestBed.inject(PetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
