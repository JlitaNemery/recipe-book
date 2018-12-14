import { Recipe } from '../../models/recipe.model';
import { EventEmitter, Injectable } from '../../../../node_modules/@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
  
    private recipes: Recipe[] = [
        new Recipe('Dinner', 'Just awesome!',
        '../assets/images/dinner.jpg',
        [
            new Ingredient('Fish', 1),
            new Ingredient('Steemed Vegies', 20)

        ]),
        new Recipe('Big Fat Burger', 'This is all you need!',
        '../assets/images/burger.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number){
        return this.recipes[index];
    }
}