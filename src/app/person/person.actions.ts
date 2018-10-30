import {BaseAction, newType} from '../helpers/action.helper';

@newType
export class LoadPersons extends BaseAction {
  constructor(payload?: string) {
    super();
  }
}

export type PersonActions = LoadPersons;

export enum PersonActionTypes {
  LoadPersons = 'LoadPersons',
  LoadFailed = 'LoadFailed'
}

