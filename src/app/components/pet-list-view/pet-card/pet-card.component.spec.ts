import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCardComponent } from './pet-card.component';

describe('PetCardComponent', () => {
  let component: PetCardComponent;
  let fixture: ComponentFixture<PetCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PetCardComponent]
    });
    fixture = TestBed.createComponent(PetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event', () => {
    spyOn(component.clickEvent, 'emit');
    component.cardClickEvent();
    expect(component.clickEvent.emit).toHaveBeenCalled();
  });
});
