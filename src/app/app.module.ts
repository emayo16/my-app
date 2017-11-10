import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatButtonModule, MatCheckboxModule, MatGridListModule, MatToolbarModule, MatCardModule, MatInputModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RecipeGridComponent } from './recipe-grid/recipe-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RecipeGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
