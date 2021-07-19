import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './create-person/create-person.component';
import { ViewFamilyComponent } from './view-family/view-family.component';

const routes: Routes = [
  { path: 'createPerson', component: CreatePersonComponent },
  { path: 'viewFamily'  , component: ViewFamilyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
