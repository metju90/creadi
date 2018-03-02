import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tile from '../Tile';
import { fetchInsurances, toggleModal } from '../../actions';
import AddCTA from './AddCTA';
import EmptyMessage from './EmptyMessage';
import * as skin from './skin';

const DashboardWrapper = styled.div`${skin.Dashboard};`;

class Dashboard extends Component {
  componentDidMount() {
  	const { fetchInsurances } = this.props;
  	if (fetchInsurances) {
  		fetchInsurances();
  	}
  }

  renderTiles = tiles => tiles.map(t => <Tile {...t} />)

  render() {
  	// isBackgroundRed prop is being passed
  	// to test storybook with a variant.
    const { isBackgroundRed, toggleModal, currentUserInsurances } = this.props;
    return (
      <DashboardWrapper isBackgroundRed={isBackgroundRed}>
        {!!currentUserInsurances.length ?
            this.renderTiles(currentUserInsurances)
            :
            <EmptyMessage />
          }
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

const mapStateToProps = state => ({
  currentUserInsurances: state.currentUser.insurances,
});

const mapDispacthToProps = {
  fetchInsurances,
  toggleModal,
};

export default connect(mapStateToProps, mapDispacthToProps)(Dashboard);
