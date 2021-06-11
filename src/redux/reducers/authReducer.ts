import {CONSTANTS} from '../../constants/index';

export interface authStateIF {
  authenticated: boolean;
  accessToken: string;
  userData: any;
  loading: boolean;
  isError: boolean;
  config: Array<any>;
  error: any;
  message: string;
  loginType: string;
}

const initialState: authStateIF = {
  authenticated: false,
  accessToken: '',
  userData: [],
  loading: false,
  isError: false,
  config: [],
  error: [],
  message: '',
  loginType: '',
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CONSTANTS.GET_EVENTBRITE_CONFIG_REQUESTED:
    case CONSTANTS.SIGNIN_REQUESTED:
    case CONSTANTS.SIGNUP_REQUESTED:
    case CONSTANTS.FORGOT_REQUESTED:
    case CONSTANTS.RESEND_EMAIL_REQUESTED:
    case CONSTANTS.RESET_PASSWORD_REQUESTED:
      return loginRequest(state, action);

    case CONSTANTS.SIGNIN_SUCCEEDED:
    case CONSTANTS.SIGNUP_SUCCEEDED:
      return loginSuccess(state, action);

    case CONSTANTS.SIGNIN_FAILED:
    case CONSTANTS.SIGNUP_FAILED:
      return loginFailed(state, action);

    case CONSTANTS.SOCIAL_LOGIN_REQUESTED:
      return socialLoginRequest(state, action);
    case CONSTANTS.SOCIAL_LOGIN_SUCCEEDED:
      return socialLoginSuccess(state, action);
    case CONSTANTS.SOCIAL_LOGIN_FAILED:
      return socialLoginFailed(state, action);

    case CONSTANTS.GET_EVENTBRITE_CONFIG_SUCCEEDED:
      return getEventBriteConfig(state, action);

    case CONSTANTS.GET_EVENTBRITE_CONFIG_FAILED:
    case CONSTANTS.RESET_PASSWORD_SUCCEEDED:
    case CONSTANTS.RESEND_EMAIL_SUCCEEDED:
    case CONSTANTS.FORGOT_SUCCEEDED:
      return {...state, loading: false, error: '', message: action.message};
    case CONSTANTS.RESET_PASSWORD_FAILED:
    case CONSTANTS.RESEND_EMAIL_FAILED:
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

    case CONSTANTS.CLEAR_ERROR:
      return {...state, error: '', message: ''};

    case CONSTANTS.SIGNOUT_REQUESTED:
      return {...state, loading: true, error: ''};

    case CONSTANTS.SIGNOUT_SUCCEEDED:
      return {
        ...state,
        loading: false,
        authenticated: false,
        loginType: '',
        accessToken: ''
      };

    case CONSTANTS.SIGNOUT_FAILED:
      return {...state, loading: false, error: action.message};

    default:
      return state;
  }
};

export default authReducer;

function getEventBriteConfig(state: authStateIF, action: any) {
  const {data} = action.payload;
  return {...state, loading: false, error: '', config: data };
}

function loginRequest(state: authStateIF, action: any) {
  return {...state, loading: true, error: ''};
}

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

function socialLoginRequest(state: authStateIF, action: any) {
  const {socialData} = action.payload;
  return {...state, loading: true, error: '', loginType: socialData.login_type};
}

function socialLoginSuccess(state: authStateIF, action: any) {
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

function socialLoginFailed(state: authStateIF, action: any) {
  const {response} = action.message;
  return {
    ...state,
    authenticated: false,
    isError: true,
    loading: false,
    loginType: '',
    error: response,
  };
}
