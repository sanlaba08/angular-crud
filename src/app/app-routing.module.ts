import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonAddComponent } from './components/person-add/person-add.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: 'addPersons', component: PersonAddComponent},
  {path: 'listPersons', component: PersonListComponent},
  {path: 'updatePerson/:id', component: PersonAddComponent},
  {path: '', redirectTo: '/listPersons', pathMatch:'full'},
  {path: '**', component : NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
