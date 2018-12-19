import { Injectable } from "../../../../node_modules/@angular/core";
import { HttpClient, HttpResponse } from "../../../../node_modules/@angular/common/http";
import { RecipeService } from "./recipe.service";
import { Recipe } from "../../models/recipe.model";

@Injectable()
export class DatabaseStorageService {

    

    constructor(private httpClient: HttpClient, private recipeService: RecipeService){}
   
    storeRecipes(){
        return this.httpClient.put('https://recipe-book-c169f.firebaseio.com/recipes.json', 
        this.recipeService.getRecipes());
    }

    getRecipes(){
      this.httpClient.get<Recipe[]>('https://recipe-book-c169f.firebaseio.com/recipes.json')
      // u need to add a map here later! 
      // for the property 'ingredients' to be always present
      .subscribe(
       (recipes: Recipe[]) => {
           this.recipeService.setRecipes(recipes);
       });
    }

}