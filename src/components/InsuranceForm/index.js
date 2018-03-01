import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import FontAwesome from 'react-fontawesome';
import { Field, reduxForm } from 'redux-form'
import { toggleModal } from '../../actions';
import insuranceIcon from '../../images/insurance.png';
import * as skin from './skin';
import Input from './Input';
import Header from './Header';
import Form from './Form';

const HeaderTitle = styled.span`${skin.HeaderTitle}`;
const Submit = styled.button`${skin.Submit}`;

class InsuranceForm extends Component {
 
  onCloseModal = () => this.props.toggleModal();
  // Forced to use inline css for the Modal. CSS-in-JS incompatibility
  render() {
    const { isOpen, data } = this.props;
    console.log('datta', data);
    return (
        <Modal open={isOpen}
               onClose={this.onCloseModal}
               styles={{
                 modal: {
                   width: "400px",
                   "text-align": "center",
                   "padding": "30px",
                 }
               }}
              little>
          <Header>
              <img width="35px"
                height="35px"
                style={{ marginRight: '10px' }}
                src={insuranceIcon}
              />
              <HeaderTitle> Add new insurance</HeaderTitle>
          </Header>
          <Form>
            <Field component={Input} id="title" name="titleID" options={data} selectable />
            <Field component={Input} id="premium" name="premium" placeholder="5,000" />
            <Submit onClick={onSubmit}> Send now! </Submit>
          </Form>
        </Modal>
    );
  }
}

const onSubmit = e => {
  e.preventDefault();
}

const mapStateToProps = state => ({
  ...state.insurances,
  ...state.modal,
});

const mapDispacthToProps = {
  toggleModal,
};

export default connect(mapStateToProps, mapDispacthToProps)(InsuranceForm);

// export default InsuranceForm;
