import { Action } from 'redux';
import Food from '../../pages/food';
import { FOOD_SEARCH_FAIL, FOOD_SEARCH_SUCCESS, FOOD_SEARCH } from '../actions/actionType';
import { search, searchFail, searchSuccess } from '../actions/food';

export interface FoodState {
  data: any[];
  foodName: string;
  error: string;
}
const initialState: FoodState = {
  data: [],
  foodName: '',
  error: '',
};

export type SearchAction = ReturnType<typeof search> | ReturnType<typeof searchSuccess> | ReturnType<typeof searchFail>;

const food = (state = initialState, action: SearchAction) => {
  switch (action.type) {
    case FOOD_SEARCH:
      return { ...state, foodName: action.payload.foodName };
    case FOOD_SEARCH_SUCCESS:
      return { ...state, data: action.payload.data };
    case FOOD_SEARCH_FAIL:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

export default food;
