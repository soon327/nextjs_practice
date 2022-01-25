import { call, put, takeEvery } from 'redux-saga/effects';
import { FOOD_SEARCH } from '../actions/actionType';
import * as actions from '../actions/food';
import getFoodInfo from '../../api/getFoodInfo';

/*
redux-saga/effects
call : 특정 함수를 호출하고, 결과물이 반환될때까지 기다린다.
put: usedispatch임. 액션 디스패치 가능
select: useSelector임. 상태값 참조가능
takeEvery: action을 모니터링하는 함수 디스패치되는 해당액션 모두 처리. 
<->takeLatest는 디스패치된 가장 마지막액션만 처리.
*/

// const getFoodInfo = (foodName:string) => {
// return axios.get(`/api/${foodName}`)
// }

function* fetchSearchFoodSaga(action: ReturnType<typeof actions.search>) {
  try {
    const result: any[] = yield call(getFoodInfo, action.payload.foodName);
    yield put(actions.searchSuccess(result));
  } catch (error) {
    yield put(actions.searchFail(error));
  }
}

export default function* watchSearchFood() {
  yield takeEvery(FOOD_SEARCH, fetchSearchFoodSaga);
}
