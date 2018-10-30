import { PersonActions, PersonActionTypes } from './person.actions';

export interface State {
  loading: boolean;
}

export const initialState: State = {
  loading: false
};

export function reducer(state = initialState, action: PersonActions): State {
  switch (action.type) {
    case PersonActionTypes.LoadPersons:
      return state;

    default:
      return state;
  }
}
