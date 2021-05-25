import {takeEvery, put, call} from 'redux-saga/effects';
import { IStructuredData } from 'screens';
import {EVENT} from '../../constants/index';
import {currentEvent, structuredContent} from '../actions';

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

export function* structuredContentSaga(action:{
  type: string;
  payload: IStructuredData;
}): Generator {
  const {payload:{id}} = action;
  try {
    const {data}: any = yield call(structuredContent,id);
    yield put({type: EVENT.GET_STRUCTURED_CONTENT_SUCCEEDED, payload: data});
  } catch (error) {
    yield put({
      type: EVENT.GET_STRUCTURED_CONTENT_FAILED,
      message: error.response.data,
    });
  }
}

export default function* watchToeventSaga() {
  yield takeEvery(EVENT.CURRENT_GET_ALL_EVENT_REQUESTED, currentEventSaga);
  yield takeEvery(EVENT.GET_STRUCTURED_CONTENT_REQUESTED, structuredContentSaga);
}
