import React from 'react';
import styled from 'styled-components';
import EmojiImage from '../../images/confused_face.png';
import * as skin from './skin';

const Text = styled.p`${skin.Text};`;
const Wrapper = styled.div`${skin.Wrapper};`;
const Emoji = styled.img`${skin.Emoji};`;


const EmptyMessage = props => (
  <Wrapper>
    <Emoji src={EmojiImage} />
    <Text>You have no insurances.</Text>
  </Wrapper>
);

export default EmptyMessage;
