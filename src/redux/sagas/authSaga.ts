import {takeEvery, put, call, delay} from 'redux-saga/effects';
import {ISignUpData, Ilogindata} from 'screens​';
import {CONSTANTS} from '../../constants/index';
import {login, signUp, forgot, signOut} from '../actions';
import {navigate} from '../../navigators';
import AsyncStorage from '@react-native-community/async-storage';

export function* loginSaga(action: {
  type: string;
  payload: Ilogindata;
}): Generator {
  const {payload} = action;
  try {
    const {data}: any = yield call(login, payload);
    console.log('DATA ==>', data);
    yield put({type: CONSTANTS.SIGNIN_SUCCEEDED, payload: data});
  } catch (error) {
    console.log('Sign up Error ==>', error.response.data);
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
  const {payload} = action;
  try {
    const {data}: any = yield call(signUp, payload);
    yield put({type: CONSTANTS.SIGNUP_SUCCEEDED, payload: data});
  } catch (error) {
    console.log('Sign up Error ==>', error.response);
    yield put({
      type: CONSTANTS.SIGNUP_FAILED,
      message: error.response.data,
    });
  }
}

export function* forgotSaga(action: {
  type: string;
  payload: ISignUpData;
}): Generator {
  const {payload} = action;
  try {
    const {data}: any = yield call(forgot, payload);
    navigate('ResetPassword');
    yield put({type: CONSTANTS.FORGOT_SUCCEEDED, message: data.response});
  } catch (error) {
    yield put({type: CONSTANTS.FORGOT_FAILED, message: error.response.data});
  }
}

export function* signOutSaga(): Generator {
  try {
    // const response = yield call(signOut);
    // console.log('Response ==>', response);
    yield delay(2000);
    yield put({type: CONSTANTS.SIGNOUT_SUCCEEDED});
    AsyncStorage.clear();
  } catch (error) {
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

export default function* watchTologinSaga() {
  yield takeEvery(CONSTANTS.SIGNIN_REQUESTED, loginSaga);
  yield takeEvery(CONSTANTS.SIGNUP_REQUESTED, signUpSaga);
  yield takeEvery(CONSTANTS.FORGOT_REQUESTED, forgotSaga);
  yield takeEvery(CONSTANTS.SIGNOUT_REQUESTED, signOutSaga);
  yield takeEvery(CONSTANTS.GOOGLE_LOGIN_REQUESTED, googlelogin);
  yield takeEvery(CONSTANTS.FB_LOGIN_REQUESTED, facebooklogin);
}
