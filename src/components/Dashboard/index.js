import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HashLoader } from 'react-spinners';
import Tile from '../Tile';
import { fetchInsurances } from '../../actions';
import EmptyMessage from './EmptyMessage';
import * as skin from './skin';

const DashboardWrapper = styled.div`${skin.Dashboard};`;
const FullPageLoaderWrapper = styled.div`${skin.FullPageLoader}`;
const LogoWrapper = styled.div`${skin.LogoWrapper}`;
const FullPageLoader = ({props}) => (
    <FullPageLoaderWrapper {...props} >
        <LogoWrapper>
            <HashLoader  size={80} color="#000" />
        </LogoWrapper>
    </FullPageLoaderWrapper>
  );

class Dashboard extends Component {

  componentDidMount() {
  	const { fetchInsurances } = this.props;
  	if (fetchInsurances) {
  		fetchInsurances();
  	}
  }
  // 
  renderTiles = (insurance, index) => <Tile key={index} index={index} {...insurance} />

  render() {
  	// isBackgroundRed prop is being passed
  	// to test storybook with a variant.
    const { isBackgroundRed, currentUserInsurances, isAnythingLoading } = this.props;
    if (isAnythingLoading) {
        return <FullPageLoader />
    }

    return (
      <DashboardWrapper className="container" isBackgroundRed={isBackgroundRed}>
        <div className="row" style={{margin: "auto", textAlign: "center"}}>
        {currentUserInsurances.length ?  currentUserInsurances.map(this.renderTiles) : <EmptyMessage />}
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
  isAnythingLoading: state.currentUser.isLoading || state.insurances.isLoading,
});

const mapDispacthToProps = {
  fetchInsurances,
};

export default connect(mapStateToProps, mapDispacthToProps)(Dashboard);
