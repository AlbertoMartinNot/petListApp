import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetListViewComponent } from './components/pet-list-view/pet-list-view.component';

const routes: Routes = [
  {
    path: '',
    component: PetListViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
