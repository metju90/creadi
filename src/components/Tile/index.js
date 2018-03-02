import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as skin from './skin';

const TileWrapper = styled.div`${skin.TileWrapper}`;
const Title = styled.h2`${skin.Title}`;
const Premium = styled.span`${skin.Premium}`;

const Tile = props => (
  <TileWrapper className="col-md-3">
    <Title>{props.title}</Title>
    <Premium>{`CHF ${props.premium}`}</Premium>
  </TileWrapper>
);

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  premium: PropTypes.string.isRequired,
};

export default Tile;
