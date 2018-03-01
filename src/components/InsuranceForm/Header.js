import React from 'react';
import styled from 'styled-components';
import * as skin from './skin';

const StyledHeader = styled.div`${skin.Header}`;

const Header = props => [
  <StyledHeader {...props} />,
];

export default Header;
