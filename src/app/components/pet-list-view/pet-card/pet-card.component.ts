import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
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
