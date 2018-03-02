import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import * as skin from './skin';

const StyledAddCTAButton = styled(FontAwesome)`${skin.AddCTAButton}`;
const StyledAddCTAText = styled.div`${skin.AddCTAText}`;

const AddCTAButton = props => <StyledAddCTAButton {...props} />;

const AddCTAText = props =>
  (<StyledAddCTAText {...props}>
    <div>We are worried about you.</div>
    <div>Add <strong>#Mysurance</strong> now?</div>
  </StyledAddCTAText>);

AddCTAButton.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export {
  AddCTAButton,
  AddCTAText,
};
