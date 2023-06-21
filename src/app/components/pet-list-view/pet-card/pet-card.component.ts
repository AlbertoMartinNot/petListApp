import { UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  imports:[MatCardModule, UpperCasePipe],
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent {

  @Input() name = '';
  @Input() imageSrc = '';
  @Input() petType = '';

  @Output() clickEvent = new EventEmitter<string>();

  cardClickEvent(){
    this.clickEvent.emit(this.name)
  }


}
