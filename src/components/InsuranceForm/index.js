import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import { Field } from 'redux-form';
import { toggleModal, addInsurance } from '../../actions';
import insuranceIcon from '../../images/insurance.png';
import * as skin from './skin';
import Input from './Input';
import Header from './Header';
import Form from './Form';

const HeaderTitle = styled.span`${skin.HeaderTitle}`;
const Submit = styled.button`${skin.Submit}`;

const InsuranceForm = ({
  isOpen,
  insuranceList,
  handleSubmit,
  isFormFieldsCorrect,
  toggleModal,
  addInsurance,
}) => {
  // There seems to be an incompatbility issue with
  // the Modal I am using and CSS in JSS. The following
  // is a workaround.
  const isSmallScreen = window.screen.width < 768;
  const modalCss = isSmallScreen ? modalSmallScreenStyle : modalBigScreenStyle;
  return (
    <Modal open={isOpen} onClose={toggleModal} styles={{ ...modalCss }} little>
      <Header>
        <img
          width="35px"
          height="35px"
          style={{ margin: '10px 15px 16px 0px' }}
          src={insuranceIcon}
        />
        <HeaderTitle> Add new insurance</HeaderTitle>
      </Header>
      <Form onSubmit={handleSubmit}>
        <Field component={Input} type="number" id="title" name="title" options={insuranceList} selectable />
        <Field component={Input} id="premium" type="number" name="premium" placeholder="Enter amount" />
        <Submit onClick={addInsurance} type="submit" disabled={isFormFieldsCorrect}> Add policy</Submit>
      </Form>
    </Modal>
  );
};

// The following two objects can be refactored.
// Repetitive code.
const modalSmallScreenStyle = {
  modal: {
    width: '100%',
    textAlign: 'center',
    padding: '30px',
    height: '100%',
  },
};
const modalBigScreenStyle = {
  modal: {
    width: '400px',
    textAlign: 'center',
    padding: '30px',
  },
};


const mapStateToProps = state => ({
  ...state.insurances,
  ...state.modal,
  isFormFieldsCorrect: (state.form.newInsurance && !!state.form.newInsurance.syncErrors),
});

const mapDispacthToProps = {
  toggleModal,
  addInsurance,
};

export default connect(mapStateToProps, mapDispacthToProps)(InsuranceForm);
