import { Component, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import { ShoppingListService } from '../../shared/shopping-list.service';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Subscription } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
    
    @ViewChild('f') slForm: NgForm;
    subscription: Subscription;
    editMode = false;
    editItemIndex: number;
    editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
     .subscribe(
        (index: number) => {
            this.editItemIndex = index;
            this.editMode = true;
            this.editedItem = this.slService.getIngredient(index);
            this.slForm.setValue({
                name: this.editedItem.name,
                amount: this.editedItem.amount
            })
        }
     );
  }

  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
        this.slService.updateIngredient(this.editItemIndex, newIngredient)
    }else{
        this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset(); 
  }

  onDelete(){
      this.slService.deleteIngredient(this.editItemIndex);
      this.onClear();
  }


}