import {CONSTANTS} from '../../constants/index';

export interface authStateIF {
  authenticated: boolean;
  accessToken: string;
  userData: any;
  loading: boolean;
  isError: boolean;
  error: any;
  message: string;
}

const initialState: authStateIF = {
  authenticated: false,
  accessToken: '',
  userData: [],
  loading: false,
  isError: false,
  error: <any>[],
  message: '',
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CONSTANTS.SPLASH_SCREEN:
      return {...state, isSplash: false, error: ''};

    case CONSTANTS.SIGNIN_REQUESTED:
    case CONSTANTS.SIGNUP_REQUESTED:
    case CONSTANTS.SOCIAL_LOGIN_REQUESTED:
    case CONSTANTS.FORGOT_REQUESTED:
    case CONSTANTS.RESET_PASSWORD_REQUESTED:
      return loginRequest(state, action);

    case CONSTANTS.SIGNIN_SUCCEEDED:
    case CONSTANTS.SOCIAL_LOGIN_SUCCEEDED:
    case CONSTANTS.SIGNUP_SUCCEEDED:
      return loginSuccess(state, action);

    case CONSTANTS.SIGNIN_FAILED:
    case CONSTANTS.SOCIAL_LOGIN_FAILED:
    case CONSTANTS.SIGNUP_FAILED:
      return loginFailed(state, action);

    case CONSTANTS.RESET_PASSWORD_SUCCEEDED:
    case CONSTANTS.FORGOT_SUCCEEDED:
      return {...state, loading: false, error: '', message: action.message};
    case CONSTANTS.RESET_PASSWORD_FAILED:
    case CONSTANTS.FORGOT_FAILED:
      const {response} = action.message;
      return {
        ...state,
        loading: false,
        isError: true,
        error: response,
        message: '',
      };

    case CONSTANTS.CLEAR_ERROR:
      return {...state, error: '', message: ''};

    case CONSTANTS.SIGNOUT_REQUESTED:
      return {...state, loading: true, error: ''};

    case CONSTANTS.SIGNOUT_SUCCEEDED:
      return {...state, loading: false, authenticated: false};

    case CONSTANTS.SIGNOUT_FAILED:
      return {...state, loading: false, error: action.message};

    default:
      return state;
  }
};

export default authReducer;

function loginSuccess(state: authStateIF, action: any) {
  const {data, access_token} = action.payload;
  return {
    ...state,
    authenticated: true,
    accessToken: access_token,
    userData: data,
    loading: false,
    error: '',
  };
}
function loginFailed(state: authStateIF, action: any) {
  const {response} = action.message;
  return {
    ...state,
    authenticated: false,
    isError: true,
    loading: false,
    error: response,
  };
}
function loginRequest(state: authStateIF, action: any) {
  return {...state, loading: true, error: ''};
}
