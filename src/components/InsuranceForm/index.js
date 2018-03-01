import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import FontAwesome from 'react-fontawesome';
import { toggleModal } from '../../actions';
import * as skin from './skin';
import closeButtonPath from '../../images/close.svg';
import insuranceIcon from '../../images/insurance.png';
import { capitalizeFirstLetter } from '../../utils';
// const InsuranceFormWrapper = styled.div`${skin.InsuranceForm};`;

const StyledHeader = styled.div`${skin.Header}`;
const StyledInput = styled.input`${skin.Input}`;
const StyledForm = styled.form`${skin.Form}`;
const HeaderTitle = styled.span`${skin.HeaderTitle}`;
const InputTitle = styled.div`${skin.InputTitle}`;

class InsuranceForm extends Component {
 
  onCloseModal = () => this.props.toggleModal();
  
  render() {
    const { isOpen } = this.props;
    return (
        <Modal 
              open={isOpen}
              onClose={this.onCloseModal}
              closeIconSvgPath={closeButtonPath}
              styles={{
                modal: {
                  width: "400px",
                  "text-align": "center",
                  "padding": "30px",
                }
              }}
              little>
          <Header />
          <Form>
            <Input 
                name="title"
                placeholder="Insurance name"  />

            <Input 
                name="premium"
                placeholder="5,000" />
          </Form>
        </Modal>
    );
  }
}

const Header = () => (
  <StyledHeader>
     <img 
          width="35px"
          height="35px"
          style={{marginRight: "10px"}}
          src={insuranceIcon} />
     <HeaderTitle>Add new insurance</HeaderTitle>
  </StyledHeader>
);

const Form = props => <StyledForm {...props} />

const Input = props => [
  <InputTitle>{capitalizeFirstLetter(props.name)}:</InputTitle>,
  <StyledInput {...props} />,
]

// InsuranceForm.propTypes = {
//   isBackgroundRed: PropTypes.bool,
// };

const mapStateToProps = state => ({
  ...state.modal,
});

const mapDispacthToProps = {
  toggleModal,
};

export default connect(mapStateToProps, mapDispacthToProps)(InsuranceForm);

// export default InsuranceForm;
