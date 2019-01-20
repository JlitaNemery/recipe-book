import { Effect, Actions, ofType } from '@ngrx/effects';
import * as RecipeActions from '../ngrx/recipe.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import * as fromRecipe from '../ngrx/recipe.reducers';
import { Store } from '@ngrx/store';
import { dispatch } from 'rxjs/internal/observable/range';

@Injectable()
export class RecipeEffects{
    @Effect()
    recipeFetch = this.actions$
    .pipe(ofType(RecipeActions.FETCH_RECIPES))
    .pipe(switchMap((action: RecipeActions.FetchRecipes) => {
        return this.httpClient.get<Recipe[]>('https://recipe-book-c169f.firebaseio.com/recipes.json',
        {
            observe: 'body',
            responseType: 'json'
          })          
    })) 
    .pipe(map((
        (recipes) => {
          console.log(recipes);
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return {
              type: RecipeActions.SET_RECIPES,
              payload: recipes
          };
        }
      )));

      @Effect({dispatch: false})
      recipeStore = this.actions$
      .pipe(ofType(RecipeActions.STORE_RECIPES))
      .pipe(withLatestFrom(this.store.select('recipes')))
      .pipe(switchMap(([action, state]) =>{
        const req = new HttpRequest('PUT','https://recipe-book-c169f.firebaseio.com/recipes.json',
        state.recipes, {reportProgress: true});
        return this.httpClient.request(req);
      }));


    constructor(private actions$: Actions,
                private httpClient: HttpClient,
                private store: Store<fromRecipe.FeatureState>){}

}