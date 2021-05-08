import {all} from 'redux-saga/effects';

import watchToauthSaga from './authSaga';
import watchToeventSaga from './eventSaga';

export default function* sagas() {
  yield all([watchToauthSaga(), watchToeventSaga()]);
}
