import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import * as skin from './skin';

const TileWrapper = styled.div`${skin.TileWrapper}`;
const Title = styled.h2`${skin.Title}`;
const Premium = styled.span`${skin.Premium}`;
const DeleteWrapper = styled.div`${skin.DeleteWrapper}`;
const Wrapper = styled.div`${skin.Wrapper}`;
const Slider = styled.div`${skin.Slider}`;

class Tile extends Component {

	state = {
		isClicked:false
	}

	onClickEvent = () => this.setState(prevState => ({ isClicked: !prevState.isClicked}))

  	render() {
	  	const { title, premium } = this.props;
	  	const { isClicked } = this.state;
	    return (
	      <Wrapper  onClick={this.onClickEvent} >
	        <Slider style={ isClicked ? cssTransition : {}}>
		        <TileWrapper >
		          <Title>{title}</Title>
		          <Premium>{`CHF ${premium}`}</Premium>
		        </TileWrapper>
		        <DeleteWrapper> <FontAwesome name="rocket" /> </DeleteWrapper>
	        </Slider>
	      </Wrapper>
	    );
	  }
}
const cssTransition = {
  transform: 'translateX(-80px)',
};

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  premium: PropTypes.string.isRequired,
};

export default Tile;
