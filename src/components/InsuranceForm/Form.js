import React from 'react';
import styled from 'styled-components';
import { capitalizeFirstLetter } from '../../utils';
import * as skin from './skin';

const StyledForm = styled.form`${skin.Form}`;
const Form = props => <StyledForm {...props} />;

export default Form;
