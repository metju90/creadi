import _ from 'lodash';
import { USER_ADD_INSURANCE, CALC_TOTAL_PREMIUM, USER_ADD_INSURANCE_IS_LOADING } from '../constants';

const sum = (total, num) => total + num;


const sumUpPremium = (insurances, currentTotalPremium) => insurances
  .map(i => Number(i.premium))
  .reduce((totalPremium, premium, index) => totalPremium + premium, 0);

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

    case CALC_TOTAL_PREMIUM:
      return {
        ...state,
        totalPremium: sumUpPremium([...state.insurances]),
      };
    case USER_ADD_INSURANCE_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
}
