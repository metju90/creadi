import React, { Component } from 'react';
import * as skin from './skin.js';
import styled from 'styled-components';

const TileWrapper = styled.div`${skin.TileWrapper}`;
const Title = styled.h2`${skin.Title}`;
const Premium = styled.span`${skin.Premium}`;

class Tile extends Component {
  render() {
  	const { title, premium } = this.props;
    return (
      <TileWrapper className="col-md-3">
        <Title>{title}</Title>
        <Premium>{premium}</Premium>
      </TileWrapper>
    );
  }
}

export default Tile;
