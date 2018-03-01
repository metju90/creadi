import React from 'react';
import styled from 'styled-components';
import { reduxForm } from 'redux-form';
import * as skin from './skin';

const StyledForm = styled.form`${skin.Form}`;
let Form = props => <StyledForm {...props} />;

Form = reduxForm({
  form: 'newInsurance',
})(Form);

export default Form;
