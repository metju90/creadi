import { reducer as formReducer } from 'redux-form';
import insurances from './insurances';
import insuranceForm from './insuranceForm';
import modal from './modal';

const rootReducer = {
  insurances,
  insuranceForm,
  modal,
  form: formReducer,
};

export default rootReducer;
