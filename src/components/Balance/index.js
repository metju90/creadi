import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as skin from './skin';

const Wrapper = styled.div`${skin.Wrapper}`;
const Text = styled.span`${skin.Text}`;
const BalanceText = styled.span`${skin.BalanceText}`;

const Balance = ({ isAnythingLoading, balance }) => {
  const textToRender = isAnythingLoading ? 'Updating...' : `CHF ${balance}`;

  return (
    <Wrapper>
      {balance
          ? <BalanceText>
		          Insurance expenses:
            <div>{textToRender}</div>
          </BalanceText>
	 	     : <Text>We are worrying about you.</Text> }
    </Wrapper>
  );
};

export default Balance;
