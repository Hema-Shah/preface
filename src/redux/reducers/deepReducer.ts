import {CONSTANTS} from '../../constants/index';

export interface deepStateIF {
  loading: boolean;
  isError: boolean;
  message: string;
}

const initialState: deepStateIF = {
  loading: false,
  isError: false,
  message: '',
};

const deepReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CONSTANTS.DEEP_LINK_REQUESTED:
        return {...state, loading:true,message:''}
    case CONSTANTS.DEEP_LINK_SUCCEEDED:
        return {...state, loading:false,message:''}
    case CONSTANTS.DEEP_LINK_FAILED:
        const {response} = action.message;
        return {...state, loading:false,message:response}
    case CONSTANTS.CLEAR_DEEP_LINK_ERROR:
       return initialState;

    default:
      return state;
  }
};

export default deepReducer;
