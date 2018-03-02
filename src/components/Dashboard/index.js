import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tile from '../Tile';
import { fetchInsurances } from '../../actions';
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
    const { isBackgroundRed, currentUserInsurances } = this.props;
    return (
      <DashboardWrapper className="container" isBackgroundRed={isBackgroundRed}>
        <div className="row">
        {!!currentUserInsurances.length ?
            this.renderTiles(currentUserInsurances)
            :
            <EmptyMessage />
          }
          <Tile premium="400" title="testt" />
          <Tile premium="400" title="testt" />
          <Tile premium="400" title="testt" />
          <Tile premium="400" title="testt" />
          <Tile premium="400" title="testt" />
          <Tile premium="400" title="testt" />
          <Tile premium="400" title="testt" />
          <Tile premium="400" title="testt" />
          <Tile premium="400" title="testt" />
          <Tile premium="400" title="testt" />
          </div>
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
};

export default connect(mapStateToProps, mapDispacthToProps)(Dashboard);
