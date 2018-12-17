import { Ingredient } from '../../models/ingredient.model';
import { Subject } from '../../../../node_modules/rxjs';

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient [] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients); ///these three dots( ... ) are an es6 feature (spread operator) turns an array of elements to a list of elements
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}