import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take, switchMap } from 'rxjs/operators';

import * as fromApp from '../../ngrx/app.reducers';
import * as fromAuth from '../../auth/ngrx/auth.reducers';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    return this.store.select('auth')
    .pipe(take(1))
      .pipe(switchMap((authState: fromAuth.State) => {
        const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
        return next.handle(copiedReq);
      }))
  }
}
