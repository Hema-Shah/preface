import {all} from 'redux-saga/effects';

import watchTologinSaga from './authSaga';

export default function* sagas() {
  yield all([watchTologinSaga()]);
}
