import { Component, OnInit } from '@angular/core';
import { PetDataService } from 'src/app/services/pet-data.service';
import { Pet } from '../../interfaces/pet';

@Component({
  selector: 'app-pet-list-view',
  templateUrl: './pet-list-view.component.html',
  styleUrls: ['./pet-list-view.component.scss'],
})
export class PetListViewComponent implements OnInit {
  catButtonText = 'Show Only Cats';
  dogButtonText = 'Show Only Dogs';
  allPetsButtonText = 'Show All Pets';

  petData: any = {};
  unfilteredPetData: any = {};
  catFilterApplied: boolean = false;
  dogFilterApplied: boolean = false;
  noFilterApplied: boolean = false;

  constructor(private petDataService: PetDataService) {}

  ngOnInit() {
    this.petDataService.getPetData().subscribe((data: Pet) => {
      this.petData = data.pets;
      this.unfilteredPetData = [
        ...this.petData.sort(function (a: any, b: any) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        }),
      ];
    });
  }

  filterByPetType(petType: string) {
    this.checkAppliedFilter(petType);
    if (petType !== 'all') {
      this.petData = this.unfilteredPetData.filter(
        (pet: any) => pet.petType === petType
      );
    } else {
      this.petData = this.unfilteredPetData;
    }
  }

  checkAppliedFilter(filterType: string) {
    switch (filterType) {
      case 'all':
        {
          this.catFilterApplied = false;
          this.dogFilterApplied = false;
          this.noFilterApplied = true;
        }
        break;
      case 'dog':
        {
          this.catFilterApplied = false;
          this.dogFilterApplied = true;
          this.noFilterApplied = false;
        }
        break;
      case 'cat':
        {
          this.catFilterApplied = true;
          this.dogFilterApplied = false;
          this.noFilterApplied = false;
        }
        break;
      default:
        break;
    }
  }

  cardClicked(petName:string){
    this.petData = this.unfilteredPetData.filter(
      (pet: any) => pet.name === petName
    );

    this.catFilterApplied = true;
    this.dogFilterApplied = true;
    this.noFilterApplied = false;
  }
}
