import { FETCH_INSURANCES, IS_LOADING } from '../constants';

export default function (state = {
  insurances: [],
  selected: {
    match_id: 0,
    team: { id: 0, name: '' },
  },
  isLoading: false,
}, action = {}) {
  switch (action.type) {
    case FETCH_INSURANCES:
      return {
        ...state,
        insurances: action.payload.data.matches,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
  }
  return state;
}
