import { USER_ADD_INSURANCE, USER_ADD_INSURANCE_IS_LOADING } from '../constants';

export default function (state = {
  insurances: [],
  totalPremium: undefined,
  isLoading: false,
}, action = {}) {
  switch (action.type) {
    case USER_ADD_INSURANCE:
      console.log('wtf is the payloadd', action.payload);
      return Object.assign({}, state, {
        insurances: action.payload,
        totalPremium: 1,
      });

    case USER_ADD_INSURANCE_IS_LOADING:
      return Object.assign({}, state, { isLoading: action.payload });

    default:
      return state;
  }
}
