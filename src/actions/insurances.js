import axios from 'axios';
import {
  USER_ADD_INSURANCE,
  API_URL,
  FETCH_INSURANCES,
  FETCH_INSURANCES_IS_LOADING,
  USER_ADD_INSURANCE_IS_LOADING,
} from '../constants';
import { stripWordFromArrayOfString } from '../utils';

const fetchInsurances = () => (dispatch, state) => {
  dispatch({ type: FETCH_INSURANCES_IS_LOADING, payload: true });
  axios.get(API_URL)
    .then(res => dispatch({
    	type: FETCH_INSURANCES,
    	payload: stripWordFromArrayOfString('Category:', res.data.query.categorymembers, 'title'),
    }))
    .catch(() => dispatch({ type: 'default', payload: state.matches }))
    .finally(() => dispatch({ type: FETCH_INSURANCES_IS_LOADING, payload: false }));
};

const addInsurance = e => (dispatch, getState) => {
  e.preventDefault();
  dispatch({ type: USER_ADD_INSURANCE_IS_LOADING, payload: true });
  // to mimic API latency
  const addDataToTheStore = new Promise((resolve, reject) => {
  	setTimeout(() => {
	  	const { values } = getState().form.newInsurance;
	  	dispatch({ type: USER_ADD_INSURANCE, payload: values });
	  	resolve(true);
	  }, 2000);
  });

  addDataToTheStore
    .then(() => dispatch({ type: USER_ADD_INSURANCE_IS_LOADING, payload: false }));
};


export { fetchInsurances, addInsurance };
