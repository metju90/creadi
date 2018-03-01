import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import FontAwesome from 'react-fontawesome';
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
            <Input name="title" options={data} selectable />
            <Input name="premium" placeholder="5,000" />
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
