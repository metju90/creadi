import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import _ from 'lodash';
import { toggleModal } from '../../actions';
import { AddCTAText, AddCTAButton } from '../AddCTA';
import * as skin from './skin';
import Balance from '../Balance';

const FooterWrapper = styled.div`${skin.FooterWrapper}`;
const ContentWrapper = styled.div`${skin.ContentWrapper}`;

const Footer = (props) => {
  const { isUserInsuranceEmpty, toggleModal } = props;
  return (
    <FooterWrapper>
      <ContentWrapper>
        <Balance />
        <div> | </div>
        {isUserInsuranceEmpty ?
          <AddCTAText onClick={toggleModal} />
			     :
          <AddCTAButton name="plus" onClick={toggleModal}>Add more</AddCTAButton>
        	 }
      </ContentWrapper>
    </FooterWrapper>
  );
};

const mapStateToProps = state => ({
  isUserInsuranceEmpty: state.currentUser.insurances.length < 1,
});

const mapDispacthToProps = {
  toggleModal,
};

export default connect(mapStateToProps, mapDispacthToProps)(Footer);
