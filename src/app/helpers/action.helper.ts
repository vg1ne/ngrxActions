import {Action} from '@ngrx/store';

export function newType(target) {
  return class extends target {
    type = target.name;
  };
}

// just for compilator (implements Action )
export class BaseAction implements Action {
  readonly type: any;
}
