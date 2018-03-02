import React from 'react';
import styled from 'styled-components';
import * as skin from './skin';
import BrandLogo from '../BrandLogo';

const StyledHeader = styled.div`${skin.Header}`;

const Header = () => (
  <StyledHeader>
    <BrandLogo />
  </StyledHeader>
);

export default Header;
