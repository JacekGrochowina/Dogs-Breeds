import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/+state/app-state.model';
import { GetBreeds } from './breeds.actions';

@Injectable()
export class BreedsFacade {
  // @TODO tutaj się rozpierdala typowanie stora
  breeds$ = this.store.select(store => (store as any).breeds.breeds);

  // @TODO a rozpierdala się przed zły typ w constructorze
  constructor(private store: Store<AppState>) {
  }

  getBreeds(): void {
    this.store.dispatch(new GetBreeds());
  }
}
