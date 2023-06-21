import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() buttonText = '';
  @Input() petType = '';
  @Input() buttonDisabled :boolean = false;
  @Output() clickEvent = new EventEmitter<string>();

  buttonClickEvent(){
    this.clickEvent.emit(this.petType)
  }

}
