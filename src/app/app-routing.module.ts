import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'search', component: RecipeSearchComponent },
  { path: 'recipes', component: HomeComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes,
    { enableTracing: true }) ],
  declarations: []
})
export class AppRoutingModule { }
