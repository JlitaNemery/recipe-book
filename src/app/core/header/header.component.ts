import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';


import * as fromApp from '../../ngrx/app.reducers';
import * as fromAuth from '../../auth/ngrx/auth.reducers';
import * as AuthActions from '../../auth/ngrx/auth.actions';
import * as RecipeActions from '../../components/recipes/ngrx/recipe.actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
    authState: Observable<fromAuth.State>;

    constructor(private store: Store<fromApp.AppState>) {}

    ngOnInit(){
        this.authState = this.store.select('auth');
    }

    onSaveData(){
        this.store.dispatch(new RecipeActions.StoreRecipes());
    }

    onFetchData(){
        this.store.dispatch(new RecipeActions.FetchRecipes());
    }

    onLogout(){
        this.store.dispatch(new AuthActions.Logout());

    }
}
