import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListViewComponent } from './pet-list-view.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PetDataService } from 'src/app/services/pet-data.service';

describe('PetListViewComponent', () => {
  let component: PetListViewComponent;
  let fixture: ComponentFixture<PetListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PetListViewComponent],
      providers:[HttpClient, PetDataService, HttpHandler]
    });
    fixture = TestBed.createComponent(PetListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
