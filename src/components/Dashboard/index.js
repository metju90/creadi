import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tile from '../Tile';
import { fetchInsurances, toggleModal } from '../../actions';
import AddCTA from './AddCTA';
import * as skin from './skin';

const DashboardWrapper = styled.div`${skin.Dashboard};`;

class Dashboard extends Component {
  componentDidMount() {
  	const { fetchInsurances } = this.props;
  	if (fetchInsurances) {
  		fetchInsurances();
  	}
  }

  render() {
  	// the following prop is being passed
  	// to test storybook with a variant.
    const { isBackgroundRed, toggleModal, insurances } = this.props;
    return (
      <DashboardWrapper isBackgroundRed={isBackgroundRed}>
        {}
        <Tile title="Atlas" premium="CHF 50" />
        <Tile title="Mamo" premium="CHF 130" />
        <AddCTA
          size="2x"
          name="plus"
          onClick={toggleModal}
        />
      </DashboardWrapper>
    );
  }
}

Dashboard.propTypes = {
  isBackgroundRed: PropTypes.bool,
};

// const mapStateToProps = state => ({
//   insurancesL: state.insurances.data,
// });

const mapDispacthToProps = {
  fetchInsurances,
  toggleModal,
};

export default connect(null, mapDispacthToProps)(Dashboard);
