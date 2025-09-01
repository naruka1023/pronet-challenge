import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ListActions from './list.actions';
import { catchError, exhaustMap, map, mergeMap, of, pipe, withLatestFrom } from 'rxjs';
import { AppService } from '../../services/app/app.service';
import { selectPage } from './list.selectors';
import { Store } from '@ngrx/store';

@Injectable()
export class ListEffects {
  private actions$ = inject(Actions);
  private appService = inject(AppService);
  private store = inject(Store);
  list$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListActions.getList),
      mergeMap(({ page, limit }) =>
        this.appService.getCharacters(page, limit).pipe(
          map((list) => ListActions.getListSuccess({ list })),
          catchError((err) => of(ListActions.getListFailure({ error: err.message })))
        )
      )
    )
  );
  scrollEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListActions.scrollEvent),
      map(() => ListActions.incrementCurrentPage())
    )
  );

  incrementCurrentPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListActions.incrementCurrentPage),
      withLatestFrom(this.store.select(selectPage)),
      map(([_, page]) => ListActions.getList({ page, limit: 10 }))
    )
  );
}
