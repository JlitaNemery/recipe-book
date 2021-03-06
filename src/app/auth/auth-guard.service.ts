import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import * as fromApp from '../ngrx/app.reducers';
import * as fromAuth from './ngrx/auth.reducers';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<fromApp.AppState>){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.store.select('auth')
    .pipe(take(1)).pipe(map((authState: fromAuth.State) =>{
        return authState.authenticated;
    }));
    }
}
