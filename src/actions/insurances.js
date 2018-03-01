import axios from 'axios';
import { API_URL, FETCH_INSURANCES, IS_LOADING } from '../constants';

const fetchInsurances = () => (dispatch, state) => {
  dispatch({ type: IS_LOADING, payload: true });
  axios.get(API_URL)
    .then(res => dispatch({ type: FETCH_INSURANCES, payload: res.data.query.categorymembers }))
    .catch(() => dispatch({ type: 'default', payload: state.matches }))
    .finally(() => dispatch({ type: IS_LOADING, payload: false }));
};

export default fetchInsurances;
