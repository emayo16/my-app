import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatButtonModule, MatCheckboxModule, MatGridListModule, MatToolbarModule, MatCardModule, MatInputModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RecipeGridComponent } from './recipe-grid/recipe-grid.component';
import { FoodService } from './services/food/food.service';
import { MeasureService } from './services/measure/measure.service';
import { NutrientInfoService } from './services/nutrient-info/nutrient-info.service';
import { IngredientService } from './services/ingredient/ingredient.service';
import { RecipePartService } from './services/recipe-part/recipe-part.service';
import { RecipeService} from './services/recipe/recipe.service';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RecipeGridComponent,
    RecipeSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    FoodService,
    MeasureService,
    NutrientInfoService,
    IngredientService,
    RecipePartService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
