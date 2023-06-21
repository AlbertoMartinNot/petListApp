import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports:[MatToolbarModule],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
