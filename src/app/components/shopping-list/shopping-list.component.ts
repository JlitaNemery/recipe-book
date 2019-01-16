import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromShoppingList from '../shopping-list/ngrx/shopping-list.reducers';
import * as ShoppingListActions from '../shopping-list/ngrx/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    
    shoppingListState: Observable<{ingredients: Ingredient[]}>;

    constructor( 
        private store: Store<fromShoppingList.AppState>) { }

    ngOnInit() {
        this.shoppingListState = this.store.select('shoppingList');
    }

    onEditItem(index: number){
        this.store.dispatch(new ShoppingListActions.StartEdit(index));
    }

}
