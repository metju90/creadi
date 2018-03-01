import { TOGGLE_MODAL } from '../constants';

export default function (state = {
  isOpen: false,
}, action = {}) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
  }
  return state;
}
