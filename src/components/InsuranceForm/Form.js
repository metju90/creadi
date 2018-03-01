import React from 'react';
import styled from 'styled-components';
import { capitalizeFirstLetter } from '../../utils';
import { reduxForm } from 'redux-form';
import * as skin from './skin';

const StyledForm = styled.form`${skin.Form}`;
let Form = props => <StyledForm {...props} />;

Form = reduxForm({
  // a unique name for the form
  form: 'newInsurance',
})(Form);

export default Form;
