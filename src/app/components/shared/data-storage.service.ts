import { Injectable } from "../../../../node_modules/@angular/core";
import { HttpClient } from "../../../../node_modules/@angular/common/http";
import { RecipeService } from "./recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "src/app/auth/auth.service";

@Injectable()
export class DatabaseStorageService {

    

    constructor(private httpClient: HttpClient, 
                private recipeService: RecipeService,
                private authService: AuthService){}
   
    storeRecipes(){
        const token = this.authService.getToken();

        return this.httpClient.put('https://recipe-book-c169f.firebaseio.com/recipes.json?auth='+ token, 
        this.recipeService.getRecipes());
    }

    getRecipes(){
      const token = this.authService.getToken();

      this.httpClient.get<Recipe[]>('https://recipe-book-c169f.firebaseio.com/recipes.json?auth=' + token)
      // u need to add a map here later! 
      // for the property 'ingredients' to be always present
      .subscribe(
       (recipes: Recipe[]) => {
           this.recipeService.setRecipes(recipes);
       });
    }

}