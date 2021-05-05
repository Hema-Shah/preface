import {all} from 'redux-saga/effects';

import watchToauthSaga from './authSaga';

export default function* sagas() {
  yield all([watchToauthSaga()]);
}
