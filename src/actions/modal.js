import { TOGGLE_MODAL } from '../constants';

const toggleModal = () => (dispatch, state) => dispatch({ type: TOGGLE_MODAL, payload: !state.modal });

export default toggleModal;
