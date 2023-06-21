import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListViewComponent } from './pet-list-view.component';

describe('PetListViewComponent', () => {
  let component: PetListViewComponent;
  let fixture: ComponentFixture<PetListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetListViewComponent]
    });
    fixture = TestBed.createComponent(PetListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
