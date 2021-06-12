import {EVENT} from '../../constants/index';
import _ from 'lodash';

export interface eventStateIF {
  loading: boolean;
  isError: boolean;
  message: string;
  eventData: any;
  structureData: Array<string>;
  upcomingTickets: any;
  pastTickets: any;
}

const initialState: eventStateIF = {
  loading: false,
  isError: false,
  message: '',
  eventData: [],
  structureData: [],
  upcomingTickets: [],
  pastTickets: [],
};

const eventReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case EVENT.CURRENT_GET_ALL_EVENT_REQUESTED:
      return {...state, loading: true, message: ''};
    case EVENT.CURRENT_GET_ALL_EVENT_SUCCEEDED:
      return {...state, loading: false, eventData: action.payload, message: ''};
    case EVENT.CURRENT_GET_ALL_EVENT_FAILED:
      return {...state, isError: true, message: '', loading: false};
    case EVENT.GET_STRUCTURED_CONTENT_REQUESTED:
      return {...state, loading: true, message: ''};
    case EVENT.GET_STRUCTURED_CONTENT_SUCCEEDED:
      return structuredContentSuccess(state, action);
    case EVENT.GET_STRUCTURED_CONTENT_FAILED:
      return {...state, isError: true, message: ''};
    case EVENT.GET_TICKET_REQUESTED:
      return {...state, loading: true, message: ''};
    case EVENT.GET_TICKET_SUCCEEDED:
      return ticketSuccess(state, action);
    case EVENT.GET_TICKET_FAILED:
      return {...state, isError: true, message: ''};
    default:
      return state;
  }
};

function structuredContentSuccess(state: eventStateIF, action: any) {
  const {modules} = action.payload;
  return {
    ...state,
    loading: false,
    message: '',
    structureData: modules.map((desc:any)=>{
      return desc.data.body.text;
    })
  };
}

function ticketSuccess(state: eventStateIF, action: any) {
  const {orders} = action.payload;
  let upcoming = _.filter(orders,function(o) { return o.event.status == "live"; })
  let past = _.filter(orders,function(o) { return o.event.status != "live"; })
  return {
    ...state,
    loading: false,
    message: '',
    upcomingTickets: upcoming,
    pastTickets: past
  };
}

export default eventReducer;
