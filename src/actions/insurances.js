import axios from 'axios';
import { API_URL, FETCH_INSURANCES, IS_LOADING } from '../constants';
import { stripWordFromArrayOfString } from '../utils';

const fetchInsurances = () => (dispatch, state) => {
  dispatch({ type: IS_LOADING, payload: true });
  axios.get(API_URL)
    .then(res => dispatch({
    	type: FETCH_INSURANCES,
    	payload: stripWordFromArrayOfString('Category:', res.data.query.categorymembers, 'title'),
    }))
    .catch(() => dispatch({ type: 'default', payload: state.matches }))
    .finally(() => dispatch({ type: IS_LOADING, payload: false }));
};

const addInsurance = userInput => (dispatch, state) => {
  dispatch({ type: IS_LOADING, payload: true });
  console.log('ok time to sleep maybe?', userInput);
};

export { fetchInsurances };
