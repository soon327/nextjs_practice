import { combineReducers, AnyAction, Reducer } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import food from './food';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...(state as {}), ...action.payload };
      default:
        return state;
    }
  },
  food,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
