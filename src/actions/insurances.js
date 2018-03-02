import axios from 'axios';
import {
  API_URL,
  FETCH_INSURANCES,
  FETCH_INSURANCES_IS_LOADING,
  TOGGLE_MODAL,
  CALC_TOTAL_PREMIUM,
  USER_ADD_INSURANCE,
  USER_INSURANCE_IS_LOADING,
  USER_REMOVE_INSURANCE,
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
  const { values } = getState().form.newInsurance;
  dispatch({ type: USER_INSURANCE_IS_LOADING, payload: true });
  // to mimic API latency
  const addDataToTheStore = new Promise((resolve, reject) => {
  	setTimeout(() => {
	  	dispatch({ type: USER_ADD_INSURANCE, payload: values });
	  	resolve(true);
	  }, 2500);
  });

  addDataToTheStore
    .then(() => {
      dispatch({ type: CALC_TOTAL_PREMIUM });
      dispatch({ type: USER_INSURANCE_IS_LOADING, payload: false });
      dispatch({ type: TOGGLE_MODAL, payload: false });
    });
};

const removeInsurance = insuranceTitleToDelete => (dispatch, getState) => {
  dispatch({ type: USER_INSURANCE_IS_LOADING, payload: true });

  const userInsurances = getState().currentUser.insurances;
  console.log('ok testing!!! ', userInsurances, insuranceTitleToDelete);
  const getUpdatedUserInsurance = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userInsurances.filter(i => i.title !== insuranceTitleToDelete));
    }, 2500);
  });

  getUpdatedUserInsurance.then((insurances) => {
    console.log('hmmmm ', insurances);
    dispatch({ type: USER_REMOVE_INSURANCE, payload: insurances });
    dispatch({ type: USER_INSURANCE_IS_LOADING, payload: false });
  });
};

export {
  fetchInsurances,
  addInsurance,
  removeInsurance,
};
