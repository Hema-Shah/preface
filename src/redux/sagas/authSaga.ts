import {takeEvery, put, call, delay, select} from 'redux-saga/effects';
import {Keyboard} from 'react-native';
import {ISignUpData, Ilogindata, IforgetData, IresetData} from '../../screens';
import {CONSTANTS} from '../../constants/index';
import {login, signUp, forgot, signOut, reset, checkForgot} from '../actions';
import {IDeepLinkData, navigate} from '../../navigators';
import {saveKey, clearKey} from 'helpers';

export function* loginSaga(action: {
  type: string;
  payload: Ilogindata;
}): Generator {
  Keyboard.dismiss();
  const {payload} = action;
  try {
    const {data}: any = yield call(login, payload);
    saveKey(CONSTANTS.TOKEN, data.access_token);
    yield put({type: CONSTANTS.SIGNIN_SUCCEEDED, payload: data});
  } catch (error) {
    yield put({
      type: CONSTANTS.SIGNIN_FAILED,
      message: error.response.data,
    });
  }
}

export function* signUpSaga(action: {
  type: string;
  payload: ISignUpData;
}): Generator {
  Keyboard.dismiss();
  const {payload} = action;
  try {
    const {data}: any = yield call(signUp, payload);
    saveKey(CONSTANTS.TOKEN, data.access_token);
    yield put({type: CONSTANTS.SIGNUP_SUCCEEDED, payload: data});
  } catch (error) {
    yield put({
      type: CONSTANTS.SIGNUP_FAILED,
      message: error.response.data,
    });
  }
}

export function* forgotSaga(action: {
  type: string;
  payload: IforgetData;
}): Generator {
  Keyboard.dismiss();
  const {payload} = action;
  try {
    const {data}: any = yield call(forgot, payload);
    navigate('CheckEmail');
    yield put({type: CONSTANTS.FORGOT_SUCCEEDED, message: data.response});
  } catch (error) {
    yield put({type: CONSTANTS.FORGOT_FAILED, message: error.response.data});
  }
}

export function* checkForgotSaga(action: {
  type: string;
  payload: IDeepLinkData;
}): Generator {
  const {
    payload,
    payload: {url},
  } = action;
  try {
    const {data}: any = yield call(checkForgot, payload);
    if (data.status == 'success') {
      let route = url.replace(/.*?:\/\//g, '').split('/');
      navigate('ResetPassword', {id: route[3]});
      yield put({type: CONSTANTS.DEEP_LINK_SUCCEEDED, message: data.response});
    }
  } catch (error) {
    yield put({type: CONSTANTS.DEEP_LINK_FAILED, message: error.response.data});
  }
}

export function* resetSaga(action: {
  type: string;
  payload: IresetData;
}): Generator {
  Keyboard.dismiss();
  const {payload} = action;
  try {
    const {data}: any = yield call(reset, payload);
    navigate('UpdatePassword');
    yield put({
      type: CONSTANTS.RESET_PASSWORD_SUCCEEDED,
      message: data.response,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.RESET_PASSWORD_FAILED,
      message: error.response.data,
    });
  }
}

export function* signOutSaga(): Generator {
  try {
    const {auth}: any = yield select();
    yield call(signOut, auth.accessToken);
    clearKey();
    yield put({type: CONSTANTS.SIGNOUT_SUCCEEDED});
  } catch (error) {
    console.log('Error ==>', error.response);
    yield put({type: CONSTANTS.SIGNOUT_FAILED});
  }
}

export function* googlelogin(action: any) {
  yield put({
    type: CONSTANTS.GOOGLE_LOGIN_SUCCEEDED,
    payload: action.payload,
  });
}

export function* facebooklogin(action: any) {
  yield put({
    type: CONSTANTS.FB_LOGIN_SUCCEEDED,
    payload: action.payload,
  });
}

export default function* watchToauthSaga() {
  yield takeEvery(CONSTANTS.SIGNIN_REQUESTED, loginSaga);
  yield takeEvery(CONSTANTS.SIGNUP_REQUESTED, signUpSaga);
  yield takeEvery(CONSTANTS.FORGOT_REQUESTED, forgotSaga);
  yield takeEvery(CONSTANTS.DEEP_LINK_REQUESTED, checkForgotSaga);
  yield takeEvery(CONSTANTS.RESET_PASSWORD_REQUESTED, resetSaga);
  yield takeEvery(CONSTANTS.SIGNOUT_REQUESTED, signOutSaga);
  yield takeEvery(CONSTANTS.GOOGLE_LOGIN_REQUESTED, googlelogin);
  yield takeEvery(CONSTANTS.FB_LOGIN_REQUESTED, facebooklogin);
}
