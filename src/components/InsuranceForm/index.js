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

const InsuranceForm = (props) => {
  const {
    isOpen,
    insuranceList,
    handleSubmit,
    submitting,
    isFormFieldsCorrect,
    toggleModal,
    addInsurance,
    isUserDataAddedInStore,
  } = props;

  return (
    <Modal open={isOpen} onClose={toggleModal} styles={{ ...modalStlyed }} little>
      <Header>
        <img
          width="35px"
          height="35px"
          style={{ marginRight: '10px' }}
          src={insuranceIcon}
        />
        <HeaderTitle> Add new insurance</HeaderTitle>
      </Header>
      <Form onSubmit={handleSubmit}>
        <Field component={Input} type="number" id="title" name="title" options={insuranceList} selectable />
        <Field component={Input} id="premium" name="premium" placeholder="5,000" />
        <Submit onClick={addInsurance} type="submit" disabled={isFormFieldsCorrect}> Send now! </Submit>
      </Form>
    </Modal>
  );
};

const modalStlyed = {
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
  isUserDataAddedInStore: !!state.currentUser.isLoading,
});

const mapDispacthToProps = {
  toggleModal,
  addInsurance,
};

export default connect(mapStateToProps, mapDispacthToProps)(InsuranceForm);
