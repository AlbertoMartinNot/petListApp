import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PetListViewComponent } from './components/pet-list-view/pet-list-view.component';
import { ButtonComponent } from './components/pet-list-view/button/button.component';
import { PetCardComponent } from './components/pet-list-view/pet-card/pet-card.component';
import { PetDetailComponent } from './components/pet-list-view/pet-detail/pet-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { PetDataService } from './services/pet-data.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PetListViewComponent,
    ButtonComponent,
    PetCardComponent,
    PetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [PetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
