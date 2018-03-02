import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import * as skin from './skin';

const StyledAddCTAButton = styled(FontAwesome)`${skin.AddCTAButton}`;
const StyledAddCTAText = styled.div`${skin.AddCTAText}`;

const AddCTAButton = props => <StyledAddCTAButton {...props} />;

export default AddCTAButton;
