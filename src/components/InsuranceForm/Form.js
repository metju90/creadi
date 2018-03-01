import React from 'react';
import styled from 'styled-components';
import { reduxForm } from 'redux-form';
import * as skin from './skin';
import validate from './validate';
import asyncValidate from './asyncValidation';

const StyledForm = styled.form`${skin.Form}`;
let Form = props => <StyledForm {...props} />;

Form = reduxForm({
  form: 'newInsurance',
  validate,
  asyncValidate,
})(Form);

export default Form;
