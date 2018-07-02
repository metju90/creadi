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
    	payload: stripWordFromArrayOfString('Category:', res.data.query.categorymembers, 'title'),
    	type: FETCH_INSURANCES,
    }))
    .catch(() => dispatch({ type: 'default', payload: state.matches }))
    .finally(() => dispatch({ type: FETCH_INSURANCES_IS_LOADING, payload: false }));
};

const addInsurance = e => (dispatch, getState) => {
  e.preventDefault();
  dispatch({ type: USER_INSURANCE_IS_LOADING, payload: true });
  dispatch({ type: TOGGLE_MODAL });
  const { values } = getState().form.newInsurance; // values from redux-form

  const addDataToTheStore = new Promise((resolve, reject) => { // to mimic API latency
  	setTimeout(() => {
	  	dispatch({ type: USER_ADD_INSURANCE, payload: values });
	  	resolve(true);
	  }, 2500);
  });

  addDataToTheStore
    .then(() => {
      dispatch({ type: CALC_TOTAL_PREMIUM });
      dispatch({ type: USER_INSURANCE_IS_LOADING, payload: false });
    });
};

const removeInsurance = insuranceTitleToDelete => (dispatch, getState) => {
  dispatch({ type: USER_INSURANCE_IS_LOADING, payload: true });

  const userInsurances = getState().currentUser.insurances;
  let { totalPremium } = getState().currentUser;

  const getUpdatedUserInsurance = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userInsurances.filter((i) => {
        if (i.title === insuranceTitleToDelete) {
          totalPremium -= Number(i.premium);
          return false;
        }
        return true;
      }));
    }, 2500);
  });

  getUpdatedUserInsurance.then((insurances) => {
    dispatch({ type: USER_REMOVE_INSURANCE, payload: { insurances, totalPremium } });
    dispatch({ type: USER_INSURANCE_IS_LOADING, payload: false });
  });
};

export {
  fetchInsurances,
  addInsurance,
  removeInsurance,
};
