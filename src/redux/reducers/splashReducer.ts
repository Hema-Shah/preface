import {CONSTANTS} from '../../constants/index';

export interface splashStateIF {
  isActiveSplash: boolean;
}

const initialState: splashStateIF = {
  isActiveSplash: true,
};

const splashReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CONSTANTS.SPLASH_SCREEN:
      return {...state, isActiveSplash: false};

    default:
      return state;
  }
};

export default splashReducer;
