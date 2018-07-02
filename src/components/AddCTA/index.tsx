import * as FontAwesome from 'react-fontawesome';
import React from 'react';
import * as skin from './skin'; 
import styled from 'styled-components';

const StyledAddCTAButton = styled.div`${skin.AddCTAButton}`;
const StyledAddCTAText = styled.div`${skin.AddCTAText}`;

interface AddCTATextType {
  name: string;
  size?: string;
};

interface AddCTAButtonType {
  name: string;
}

const AddCTAButton = (props: AddCTAButtonType) => (
  <StyledAddCTAButton {...props}>
    <FontAwesome name={props.name} /> Add More
  </StyledAddCTAButton>
);

const AddCTAText = (props: AddCTATextType) =>
  (<StyledAddCTAText {...props}>
    <div>Add <strong>#Mysurance</strong> now?</div>
  </StyledAddCTAText>);


export {
  AddCTAButton,
  AddCTAText,
};
