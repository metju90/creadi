import React from 'react';
import styled from 'styled-components';
import * as skin from './skin';

const Wrapper = styled.div`${skin.Wrapper}`;
const Text = styled.div`${skin.Text}`;

const BrandLogo = props => (
  <Wrapper>
    <Text>Mysurance</Text>
  </Wrapper>
);


export default BrandLogo;
