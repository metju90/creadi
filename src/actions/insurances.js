import axios from 'axios';
import { API_URL, FETCH_INSURANCES, IS_LOADING } from '../constants';

export function fetchInsurances() {
  return (dispatch, state) => {
    dispatch({ type: IS_LOADING, payload: true });
    axios.get(API_URL)
      .then(res => dispatch({ type: FETCH_INSURANCES, payload: res }))
      .catch(() => dispatch({ type: 'default', payload: state.matches }))
      .finally(() => dispatch({ type: IS_LOADING, payload: false }));
  };
}
