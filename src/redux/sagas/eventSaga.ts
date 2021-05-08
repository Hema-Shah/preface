import {takeEvery, put, call} from 'redux-saga/effects';
import {EVENT} from '../../constants/index';
import {currentEvent} from '../actions';

export function* currentEventSaga(action:any): Generator {
  try {
    const {data}: any = yield call(currentEvent);
    yield put({type: EVENT.CURRENT_GET_ALL_EVENT_SUCCEEDED, payload: data.events});
  } catch (error) {
    yield put({
      type: EVENT.CURRENT_GET_ALL_EVENT_FAILED,
      message: error.response.data,
    });
  }
}

export default function* watchToeventSaga() {
  yield takeEvery(EVENT.CURRENT_GET_ALL_EVENT_REQUESTED, currentEventSaga);
}
