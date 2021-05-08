import {EVENT} from '../../constants/index';

export interface eventStateIF {
  loading: boolean;
  isError: boolean;
  message: string;
  eventData: any;
}

const initialState: eventStateIF = {
  loading: false,
  isError: false,
  message: '',
  eventData: [],
};

const eventReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case EVENT.CURRENT_GET_ALL_EVENT_REQUESTED:
      return {...state, loading: true, message: ''};
    case EVENT.CURRENT_GET_ALL_EVENT_SUCCEEDED:
      return {...state, loading: false, eventData: action.payload, message: ''};
    case EVENT.CURRENT_GET_ALL_EVENT_FAILED:
      return {...state, isError: true, message: ''};

    default:
      return state;
  }
};

export default eventReducer;
