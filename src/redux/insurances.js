import { FETCH_INSURANCES, FETCH_INSURANCES_IS_LOADING } from '../constants';

export default function (state = {
  insuranceList: [],
  isLoading: false,
}, action = {}) {
  switch (action.type) {
    case FETCH_INSURANCES:
      console.log('wtf is the payloadd', action.payload);
      return Object.assign({}, state, { insuranceList: action.payload });

    case FETCH_INSURANCES_IS_LOADING:
      return Object.assign({}, state, { isLoading: action.payload });

    default:
      return state;
  }
}
