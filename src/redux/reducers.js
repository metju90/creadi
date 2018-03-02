import { reducer as formReducer } from 'redux-form';
import insurances from './insurances';
import insuranceForm from './insuranceForm';
import modal from './modal';
import currentUser from './currentUser';

const rootReducer = {
  insurances,
  insuranceForm,
  modal,
  form: formReducer,
  currentUser,
};

export default rootReducer;
