import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { DropdownDirective } from './components/shared/dropdown.directive';
import { ShoppingListService } from './components/shared/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './components/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { RecipeService } from './components/shared/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseStorageService } from './components/shared/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService, DatabaseStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
