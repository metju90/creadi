import {
  USER_ADD_INSURANCE,
  CALC_TOTAL_PREMIUM,
  USER_EDIT_INSURANCE,
  USER_INSURANCE_IS_LOADING,
  USER_REMOVE_INSURANCE,
} from '../constants';

const sumUpPremium = insurances => insurances
  .map(i => Number(i.premium))
  .reduce((accumilatedPremium, premium) => accumilatedPremium + premium, 0);

export default function (state = {
  insurances: [],
  totalPremium: undefined,
  isLoading: false,
}, action = {}) {
  switch (action.type) {
    case USER_ADD_INSURANCE:
      return {
        ...state,
        insurances: [
          ...state.insurances,
          action.payload,
        ],
      };
    case USER_INSURANCE_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case USER_REMOVE_INSURANCE:
      console.log(action.payload);
      return {
        ...state,
        insurances: action.payload.insurances,
        totalPremium: action.payload.premium,
      };
    case CALC_TOTAL_PREMIUM:
      return {
        ...state,
        totalPremium: sumUpPremium([...state.insurances]),
      };

    default:
      return state;
  }
}
