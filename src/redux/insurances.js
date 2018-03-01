import { FETCH_INSURANCES, IS_LOADING } from '../constants';

export default function (state = {
  data: [],
  isLoading: false,
}, action = {}) {
  switch (action.type) {
    case FETCH_INSURANCES:
      console.log('wtf is the payloadd', action.payload);
      return {
        ...state,
        data: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
  }
  return state;
}
