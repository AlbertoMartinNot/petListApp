import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-button',
  imports:[MatButtonModule],
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
