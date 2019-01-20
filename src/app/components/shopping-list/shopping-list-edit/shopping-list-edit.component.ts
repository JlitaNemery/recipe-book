import * as ShoppingListActions from '../ngrx/shopping-list.actions';
import * as fromApp from '../../../ngrx/app.reducers';
import { Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Subscription } from '../../../../../node_modules/rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
    @ViewChild('f') slForm: NgForm;
    subscription: Subscription;
    editMode = false;
    editedItem: Ingredient;
  
    constructor(private store: Store<fromApp.AppState>) { }
  
    ngOnInit() {
      this.subscription = this.store.select('shoppingList')
        .subscribe(
          data => {
            if (data.editedIngredientIndex > -1) {
              this.editedItem = data.editedIngredient;
              this.editMode = true;
              this.slForm.setValue({
                name: this.editedItem.name,
                amount: this.editedItem.amount
              })
            } else {
              this.editMode = false;
            }
          }
        );
    }
  
    onSubmit(form: NgForm) {
      const value = form.value;
      const newIngredient = new Ingredient(value.name, value.amount);
      if (this.editMode) {
        this.store.dispatch(new ShoppingListActions.UpdateIngredient({ingredient: newIngredient}))
      } else {
        this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient))
      }
      this.editMode = false;
      form.reset();
    }
  
    onClear() {
      this.slForm.reset();
      this.editMode = false;
    }
  
    onDelete() {
      this.store.dispatch(new ShoppingListActions.DeleteIngredient());
      this.onClear();
    }
  
    ngOnDestroy() {
      this.store.dispatch(new ShoppingListActions.StopEdit());
      this.subscription.unsubscribe();
    }
  
  }
