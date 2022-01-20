import { Action } from 'redux';
import { FOOD_SEARCH_FAIL, FOOD_SEARCH_SUCCESS, FOOD_SEARCH } from '../actions/actionType';
import { search, searchFail, searchSuccess } from '../actions/food';

const initialState = {
  data: [],
  payload: {},
  error: '',
};

type SearchAction = ReturnType<typeof search> | ReturnType<typeof searchSuccess> | ReturnType<typeof searchFail>;

export default (state = initialState, action: SearchAction) => {
  switch (action.type) {
    case FOOD_SEARCH:
      return { ...state, payload: action.payload };
    case FOOD_SEARCH_SUCCESS:
      return { ...state, data: action.data };
    case FOOD_SEARCH_FAIL:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
