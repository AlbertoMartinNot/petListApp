import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListViewComponent } from './pet-list-view.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PetDataService } from 'src/app/services/pet-data.service';
import { of } from 'rxjs';
import { Pet } from 'src/app/interfaces/pet';

describe('PetListViewComponent', () => {
  let component: PetListViewComponent;
  let fixture: ComponentFixture<PetListViewComponent>;

  let unfilteredPetDataMock = {
    pets: [
      {
        name: 'Julie',
        imageSrc:
          'https://images.ctfassets.net/9q0kqy4dtpjt/70r5om3MrgcR2sDBm1Y3nL/17cb6bcd13f08cd472e2f8bc4503a025/Norbio.jpg?h=225&w=225',
        petType: 'dog',
      },
      {
        name: 'Francis',
        imageSrc:
          'https://images.ctfassets.net/9q0kqy4dtpjt/2KoBAyHyXrACGzTkP7mnAj/b912893a63d775d145c120d901568981/zoobee_goodbye_desktop.jpg?h=225&w=225',
        petType: 'dog',
      },
      {
        name: 'Manuel',
        imageSrc:
          'https://images.ctfassets.net/9q0kqy4dtpjt/2qnRm1XC7M1UsklcUWQCl4/01430ca80f73c15ff9123e555250791e/waterproof-dog-collar-petoji-meru.the_.heeler-1000x1000.jpg?h=225&w=225',
        petType: 'dog',
      },
      {
        name: 'John',
        imageSrc:
          'https://images.ctfassets.net/9q0kqy4dtpjt/1BRf3fxjIyzmxFaY10ZLUN/417a7b515fc7b3297fe70e8f3e1606d7/images.jpg?h=225&w=225',
        petType: 'dog',
      },
      {
        name: 'Rufo',
        imageSrc:
          'https://images.ctfassets.net/9q0kqy4dtpjt/5n2S0BGotYQ6Y8RalW5OBN/c17a3769b4caffc5e213902de38d2b63/download.jpg?h=225&w=225',
        petType: 'dog',
      },
      {
        name: 'Toby',
        imageSrc:
          'https://images.ctfassets.net/9q0kqy4dtpjt/4DVhGPPI5WrvjY7ooMLf0D/16ff4649f5fb30c15c99010d127f2e68/download__2_.jpg?h=225&w=225',
        petType: 'dog',
      },
      {
        name: 'Napoleon',
        imageSrc:
          'https://images.ctfassets.net/9q0kqy4dtpjt/2Ke8bFH1v2ZBvR3x6Tzt1M/2b484cb74f1e309a9958b1d8e3de7e0a/cute-corgi-puppy-1000x1000.jpg?h=225&w=225',
        petType: 'dog',
      },
      {
        name: 'Tintin',
        imageSrc:
          'https://images.ctfassets.net/9q0kqy4dtpjt/1Xleej0c4IZUmd6gdvr2AR/71c7cfcaa5f6c968dcbc890f70c03f6c/download__1_.jpg?h=225&w=225',
        petType: 'dog',
      },
      {
        name: 'Morfi',
        imageSrc:
          'https://images.ctfassets.net/9q0kqy4dtpjt/1bzzVv9HU0KSz9ysrZYEzS/211b320d7cd83071311c7c9d15d523af/images.jpg?h=225&w=225',
        petType: 'cat',
      },
      {
        name: 'Corny',
        imageSrc:
          'https://images.ctfassets.net/9q0kqy4dtpjt/5IVMpQa4FubC0UJm3ZXVOo/ef54be44e18f75da459bb34afa744d2b/download.jpg?h=225&w=225',
        petType: 'cat',
      },
      {
        name: 'Curry',
        imageSrc:
          'https://images.ctfassets.net/9q0kqy4dtpjt/AT7Zz3la8AU7uDLqdTPMH/5720405891da879b46e9fb05bf9eabc0/download__3_.jpg?h=225&w=225',
        petType: 'cat',
      },
      {
        name: 'Paddy',
        imageSrc:
          'https://images.ctfassets.net/9q0kqy4dtpjt/v8yrVQgHoqRtug83mabmj/737d420e66596a7fadaf1bf4b66e40cd/download__6_.jpg?h=225&w=225',
        petType: 'cat',
      },
      {
        name: 'Lola',
        imageSrc:
          'https://images.ctfassets.net/9q0kqy4dtpjt/3DOGIP6Brt5XhsA1ZWNa5T/8708f6e0f22e2b8064eed5c627978627/download__5_.jpg?h=225&w=225',
        petType: 'cat',
      },
      {
        name: 'Sisi',
        imageSrc:
          'https://images.ctfassets.net/9q0kqy4dtpjt/2MucohoqOXWHSSCRx1legQ/84170d171a899e3a6a671caa44ff7a81/download__2_.jpg?h=225&w=225',
        petType: 'cat',
      },
      {
        name: 'Cleopatra',
        imageSrc:
          'https://images.ctfassets.net/9q0kqy4dtpjt/1pCTQ3JDqnX02VUEIVMPsJ/382140c256e103283681e2a5cf805c7a/download__1_.jpg?h=225&w=225',
        petType: 'cat',
      },
      {
        name: 'Garfield',
        imageSrc:
          'https://images.ctfassets.net/9q0kqy4dtpjt/2KE5C7ccC0GZBhPVITdi7Z/2fe695ab02f269fea7723f5b2c15f84f/download__4_.jpg?h=225&w=225',
        petType: 'cat',
      },
    ],
  };

  let sortedPetData: Array<Pet> = [
    {
      name: 'Cleopatra',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/1pCTQ3JDqnX02VUEIVMPsJ/382140c256e103283681e2a5cf805c7a/download__1_.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Corny',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/5IVMpQa4FubC0UJm3ZXVOo/ef54be44e18f75da459bb34afa744d2b/download.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Curry',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/AT7Zz3la8AU7uDLqdTPMH/5720405891da879b46e9fb05bf9eabc0/download__3_.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Francis',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/2KoBAyHyXrACGzTkP7mnAj/b912893a63d775d145c120d901568981/zoobee_goodbye_desktop.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Garfield',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/2KE5C7ccC0GZBhPVITdi7Z/2fe695ab02f269fea7723f5b2c15f84f/download__4_.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'John',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/1BRf3fxjIyzmxFaY10ZLUN/417a7b515fc7b3297fe70e8f3e1606d7/images.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Julie',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/70r5om3MrgcR2sDBm1Y3nL/17cb6bcd13f08cd472e2f8bc4503a025/Norbio.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Lola',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/3DOGIP6Brt5XhsA1ZWNa5T/8708f6e0f22e2b8064eed5c627978627/download__5_.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Manuel',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/2qnRm1XC7M1UsklcUWQCl4/01430ca80f73c15ff9123e555250791e/waterproof-dog-collar-petoji-meru.the_.heeler-1000x1000.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Morfi',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/1bzzVv9HU0KSz9ysrZYEzS/211b320d7cd83071311c7c9d15d523af/images.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Napoleon',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/2Ke8bFH1v2ZBvR3x6Tzt1M/2b484cb74f1e309a9958b1d8e3de7e0a/cute-corgi-puppy-1000x1000.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Paddy',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/v8yrVQgHoqRtug83mabmj/737d420e66596a7fadaf1bf4b66e40cd/download__6_.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Rufo',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/5n2S0BGotYQ6Y8RalW5OBN/c17a3769b4caffc5e213902de38d2b63/download.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Sisi',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/2MucohoqOXWHSSCRx1legQ/84170d171a899e3a6a671caa44ff7a81/download__2_.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Tintin',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/1Xleej0c4IZUmd6gdvr2AR/71c7cfcaa5f6c968dcbc890f70c03f6c/download__1_.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Toby',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/4DVhGPPI5WrvjY7ooMLf0D/16ff4649f5fb30c15c99010d127f2e68/download__2_.jpg?h=225&w=225',
      petType: 'dog',
    },
  ];

  let sortedDogPetData = [
    {
      name: 'Francis',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/2KoBAyHyXrACGzTkP7mnAj/b912893a63d775d145c120d901568981/zoobee_goodbye_desktop.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'John',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/1BRf3fxjIyzmxFaY10ZLUN/417a7b515fc7b3297fe70e8f3e1606d7/images.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Julie',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/70r5om3MrgcR2sDBm1Y3nL/17cb6bcd13f08cd472e2f8bc4503a025/Norbio.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Manuel',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/2qnRm1XC7M1UsklcUWQCl4/01430ca80f73c15ff9123e555250791e/waterproof-dog-collar-petoji-meru.the_.heeler-1000x1000.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Napoleon',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/2Ke8bFH1v2ZBvR3x6Tzt1M/2b484cb74f1e309a9958b1d8e3de7e0a/cute-corgi-puppy-1000x1000.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Rufo',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/5n2S0BGotYQ6Y8RalW5OBN/c17a3769b4caffc5e213902de38d2b63/download.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Tintin',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/1Xleej0c4IZUmd6gdvr2AR/71c7cfcaa5f6c968dcbc890f70c03f6c/download__1_.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Toby',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/4DVhGPPI5WrvjY7ooMLf0D/16ff4649f5fb30c15c99010d127f2e68/download__2_.jpg?h=225&w=225',
      petType: 'dog',
    },
  ];

  let sortedCatPetData: Array<Pet> = [
    {
      name: 'Cleopatra',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/1pCTQ3JDqnX02VUEIVMPsJ/382140c256e103283681e2a5cf805c7a/download__1_.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Corny',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/5IVMpQa4FubC0UJm3ZXVOo/ef54be44e18f75da459bb34afa744d2b/download.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Curry',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/AT7Zz3la8AU7uDLqdTPMH/5720405891da879b46e9fb05bf9eabc0/download__3_.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Garfield',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/2KE5C7ccC0GZBhPVITdi7Z/2fe695ab02f269fea7723f5b2c15f84f/download__4_.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Lola',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/3DOGIP6Brt5XhsA1ZWNa5T/8708f6e0f22e2b8064eed5c627978627/download__5_.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Morfi',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/1bzzVv9HU0KSz9ysrZYEzS/211b320d7cd83071311c7c9d15d523af/images.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Paddy',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/v8yrVQgHoqRtug83mabmj/737d420e66596a7fadaf1bf4b66e40cd/download__6_.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Sisi',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/2MucohoqOXWHSSCRx1legQ/84170d171a899e3a6a671caa44ff7a81/download__2_.jpg?h=225&w=225',
      petType: 'cat',
    },
  ];

  let petDataAfterClickOnCard: Array<Pet> = [
    {
      name: 'Curry',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/AT7Zz3la8AU7uDLqdTPMH/5720405891da879b46e9fb05bf9eabc0/download__3_.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Francis',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/2KoBAyHyXrACGzTkP7mnAj/b912893a63d775d145c120d901568981/zoobee_goodbye_desktop.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Garfield',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/2KE5C7ccC0GZBhPVITdi7Z/2fe695ab02f269fea7723f5b2c15f84f/download__4_.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'John',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/1BRf3fxjIyzmxFaY10ZLUN/417a7b515fc7b3297fe70e8f3e1606d7/images.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Julie',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/70r5om3MrgcR2sDBm1Y3nL/17cb6bcd13f08cd472e2f8bc4503a025/Norbio.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Lola',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/3DOGIP6Brt5XhsA1ZWNa5T/8708f6e0f22e2b8064eed5c627978627/download__5_.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Manuel',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/2qnRm1XC7M1UsklcUWQCl4/01430ca80f73c15ff9123e555250791e/waterproof-dog-collar-petoji-meru.the_.heeler-1000x1000.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Morfi',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/1bzzVv9HU0KSz9ysrZYEzS/211b320d7cd83071311c7c9d15d523af/images.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Napoleon',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/2Ke8bFH1v2ZBvR3x6Tzt1M/2b484cb74f1e309a9958b1d8e3de7e0a/cute-corgi-puppy-1000x1000.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Paddy',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/v8yrVQgHoqRtug83mabmj/737d420e66596a7fadaf1bf4b66e40cd/download__6_.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Rufo',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/5n2S0BGotYQ6Y8RalW5OBN/c17a3769b4caffc5e213902de38d2b63/download.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Sisi',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/2MucohoqOXWHSSCRx1legQ/84170d171a899e3a6a671caa44ff7a81/download__2_.jpg?h=225&w=225',
      petType: 'cat',
    },
    {
      name: 'Tintin',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/1Xleej0c4IZUmd6gdvr2AR/71c7cfcaa5f6c968dcbc890f70c03f6c/download__1_.jpg?h=225&w=225',
      petType: 'dog',
    },
    {
      name: 'Toby',
      imageSrc:
        'https://images.ctfassets.net/9q0kqy4dtpjt/4DVhGPPI5WrvjY7ooMLf0D/16ff4649f5fb30c15c99010d127f2e68/download__2_.jpg?h=225&w=225',
      petType: 'dog',
    },
  ];

  let petDataServiceStub = jasmine.createSpyObj('PetDataService', [
    'getPetData',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PetListViewComponent],
      providers: [
        HttpClient,
        { provide: PetDataService, useValue: petDataServiceStub },
        HttpHandler,
      ],
    });

    petDataServiceStub.getPetData.and.returnValue(of(unfilteredPetDataMock));
    fixture = TestBed.createComponent(PetListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve and order pet data', () => {
    sortedPetData = unfilteredPetDataMock.pets.sort(function (a: any, b: any) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    expect(component.petData).toEqual(sortedPetData);
  });

  it('should filter pet by Dog type and check applied filter', () => {
    component.filterByPetType('dog');
    expect(component.catFilterApplied).toEqual(false);
    expect(component.dogFilterApplied).toEqual(true);
    expect(component.noFilterApplied).toEqual(false);
    expect(component.petData).toEqual(sortedDogPetData);
  });

  it('should filter pet by Cat type and check applied filter', () => {
    component.filterByPetType('cat');
    expect(component.catFilterApplied).toEqual(true);
    expect(component.dogFilterApplied).toEqual(false);
    expect(component.noFilterApplied).toEqual(false);
    expect(component.petData).toEqual(sortedCatPetData);
  });

  it('should filter pet by default type and check applied filter', () => {
    component.filterByPetType('bird');
    expect(component.catFilterApplied).toEqual(false);
    expect(component.dogFilterApplied).toEqual(false);
    expect(component.noFilterApplied).toEqual(true);
  });

  it('should filter pet by All type and check applied filter', () => {
    component.filterByPetType('all');
    expect(component.catFilterApplied).toEqual(false);
    expect(component.dogFilterApplied).toEqual(false);
    expect(component.noFilterApplied).toEqual(true);
    expect(component.petData).toEqual(sortedPetData);
  });

  it('should click pet card and remove previous elements on the list', () => {
    component.cardClicked('Curry');
    expect(component.petData).toEqual(petDataAfterClickOnCard);
  });
});
