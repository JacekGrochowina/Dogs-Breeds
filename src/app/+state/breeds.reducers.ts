import { BreedsAction, BreedsActionTypes } from './breeds.actions';
import { BreedsState } from '../resources/interfaces/breeds-state.interface';

const breedsInitialState: BreedsState = {
  breeds: []
};

export function BreedsReducer(
  state = breedsInitialState,
  action: BreedsAction
): BreedsState {
  switch (action.type) {
    case BreedsActionTypes.getBreeds: {
      return {
        ...state
      };
    }

    case BreedsActionTypes.getBreedsSuccess: {
      return {
        ...state,
        breeds: Object.entries(action.payload)
      };
    }

    case BreedsActionTypes.getBreedsFail: {
      return {
        ...state
      };
    }

    default:
      return {
        ...state
      };
  }
}
