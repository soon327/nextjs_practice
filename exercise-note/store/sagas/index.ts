import { all, call } from 'redux-saga/effects';
import watchSearchFood from './FoodSaga';

export default function* rootSaga() {
  yield all([call(watchSearchFood)]);
}
