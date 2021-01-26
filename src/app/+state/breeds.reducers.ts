import { AppState } from './app-state.model';
import { BreedsAction, BreedsActionTypes } from './breeds.actions';

const initialState: AppState = {
  breeds: []
};

export function BreedsReducer(
  state = initialState,
  action: BreedsAction
): AppState {
  switch (action.type) {
    case BreedsActionTypes.getBreeds: {
      return {
        ...state
      };
    }

    case BreedsActionTypes.getBreedsSuccess: {
      return {
        ...state,
        breeds: Object.entries(action.payload.message)
      };
    }

    case BreedsActionTypes.getBreedsFail: {
      return state;
    }

    default:
      return state;
  }
}
