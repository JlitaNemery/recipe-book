import { Recipe } from '../recipes/recipe.model';
import { Injectable } from '../../../../node_modules/@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { Subject } from '../../../../node_modules/rxjs';

export class RecipeService {
  
    recipesChanged = new Subject<Recipe[]>();

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

    constructor(){}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}