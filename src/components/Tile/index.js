import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import * as skin from './skin';
import { removeInsurance } from '../../actions';

const TileWrapper = styled.div`${skin.TileWrapper}`;
const Title = styled.h2`${skin.Title}`;
const Premium = styled.span`${skin.Premium}`;
const DeleteWrapper = styled.div`${skin.DeleteWrapper}`;
const Wrapper = styled.div`${skin.Wrapper}`;
const Slider = styled.div`${skin.Slider}`;

class Tile extends Component {

	state = {
		isClicked:false,
	}

	tileClickEvent = () => this.setState(prevState => ({ isClicked: !prevState.isClicked}))
	
	 deleteInsurance = insurance => this.props.removeInsurance(insurance);

  	render() {
	  	const { title, premium, removeInsurance } = this.props;
	  	const { isClicked } = this.state;
	    return (
	      <Wrapper  onClick={this.tileClickEvent} >
	        <Slider style={ isClicked ? cssTransition : {}}>
		        <TileWrapper >
		          <Title>{title}</Title>
		          <Premium>{`CHF ${premium}`}</Premium>
		        </TileWrapper>
		        <DeleteWrapper onClick={() => this.deleteInsurance(title)} > <FontAwesome style={{margin: "auto"}} size="2x" name="trash" /> </DeleteWrapper>
	        </Slider>
	      </Wrapper>
	    );
	  }
}
const cssTransition = {
  transform: 'translateX(-70px)',
};

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  premium: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
	removeInsurance,
}
export default connect(null, mapDispatchToProps)(Tile);
