import { Component, OnInit } from '@angular/core';
import { PetDataService } from 'src/app/services/pet-data.service';
import { Pet } from '../../interfaces/pet';
import { ButtonComponent } from './button/button.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { NgForOf } from '@angular/common';
import { petConstants } from 'src/app/constants/pet.constants';

@Component({
  standalone:true,
  selector: 'app-pet-list-view',
  templateUrl: './pet-list-view.component.html',
  imports:[ButtonComponent,PetCardComponent, NgForOf],
  styleUrls: ['./pet-list-view.component.scss'],
})
export class PetListViewComponent implements OnInit {
  catButtonText = petConstants.CAT_BUTTON_TEXT;
  dogButtonText = petConstants.DOG_BUTTON_TEXT;
  allPetsButtonText = petConstants.ALL_BUTTON_TEXT;

  petData: Array<Pet> = [];
  unfilteredPetData: any = {};
  catFilterApplied: boolean = false;
  dogFilterApplied: boolean = false;
  noFilterApplied: boolean = false;

  constructor(private petDataService: PetDataService) {}

  ngOnInit() {
    this.petDataService.getPetData().subscribe((data: any) => {
      this.unfilteredPetData = [
        ...data.pets.sort(function (a: any, b: any) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        }),
      ];
      this.petData = this.unfilteredPetData
    },
    (error) => {
      console.log(error)
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
      default:{
        this.catFilterApplied = false;
        this.dogFilterApplied = false;
        this.noFilterApplied = true;
      }
        break;
    }
  }

  cardClicked(petName:string){
    let clickedItemIndex = this.petData.findIndex((pet: any) => pet.name === petName);
    this.petData = this.petData.filter((pet,index) => index >= clickedItemIndex);
  }
}
