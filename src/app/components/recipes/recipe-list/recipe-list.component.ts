import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Subscription } from '../../../../../node_modules/rxjs';
import { Store } from '@ngrx/store';
import * as fromRecipe from '../ngrx/recipe.reducers';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    
    recipeState: Observable<fromRecipe.State>;
    subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromRecipe.FeatureState>) {                  
              }

  ngOnInit() {
      this.recipeState = this.store.select('recipes');
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
