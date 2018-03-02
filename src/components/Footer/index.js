import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions';
import { AddCTAText, AddCTAButton } from '../AddCTA';
import { Shake } from 'reshake';
import * as skin from './skin';

const FooterWrapper = styled.div`${skin.FooterWrapper}`;
const ContentWrapper = styled.div`${skin.ContentWrapper}`;

const Footer = (props) => {
  const { isUserInsuranceEmpty, toggleModal } = props;
  return (
    <FooterWrapper>
      <ContentWrapper>
        <div> your balance is xxxx</div>
        <div> | </div>
        {isUserInsuranceEmpty ?
          <AddCTAText onClick={toggleModal} />
			:
          <AddCTAButton name="plus" onClick={toggleModal} />
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
