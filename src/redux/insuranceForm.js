import { IS_LOADING } from '../constants';

export default function (state = {
  isOpen: false,
}, action = {}) {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
  }
  return state;
}
