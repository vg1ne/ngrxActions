import {Component, OnInit} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {State} from './person/person.reducer';
import {LoadPersons} from './person/person.actions';

@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private store$: Store<State>) {

  }

  ngOnInit() {
    const action = new LoadPersons('bla');
    this.store$.dispatch(action);
  }
}
