import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import * as skin from './skin';

const StyledAddNewButton = styled(FontAwesome)`${skin.AddNewButton}`;

const AddNewButton = props => (
  <StyledAddNewButton {...props} />
);

AddNewButton.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default AddNewButton;
