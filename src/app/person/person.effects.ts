import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PersonActionTypes } from './person.actions';

@Injectable()
export class PersonEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(PersonActionTypes.LoadPersons));

  constructor(private actions$: Actions) {}
}
