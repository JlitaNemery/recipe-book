import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { FormsModule } from '@angular/forms'; 
import { ShoppingListService } from './components/shared/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './components/shared/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseStorageService } from './components/shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RecipesModule } from './components/recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,  
    RecipesModule,
    AppRoutingModule
  ],
  providers: [
    ShoppingListService, 
    RecipeService, 
    DatabaseStorageService,
    AuthService,
    AuthGuard
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
