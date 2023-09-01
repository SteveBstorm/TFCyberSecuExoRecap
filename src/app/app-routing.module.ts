import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { DetailComponent } from './components/detail/detail.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';

const routes: Routes = [
  {path : 'list', component : ListComponent},
  {path : 'create', component: CreateComponent},
  {path : 'update/:id', component : UpdateComponent},
  {path : 'detail/:id', component : DetailComponent},
  {path : 'pokedex', component : PokedexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
