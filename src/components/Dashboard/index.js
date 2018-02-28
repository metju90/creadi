import React, { Component } from 'react';
import * as skin from './skin.js';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tile from '../Tile';

const DashboardWrapper = styled.div`${skin.Dashboard};`;

class Dashboard extends Component {
  componentDidMount() {
    this.props.getMessages();
  }
  render() {
    const { isBackgroundRed } = this.props;
    return (
      <DashboardWrapper isBackgroundRed={isBackgroundRed}>
        <Tile title="Atlas" premium="CHF 50" />
        <Tile title="Mamo" premium="CHF 130" />
      </DashboardWrapper>
    );
  }
}

Dashboard.propsType = {
  isBackgroundRed: PropTypes.bool,
};

const mapDispacthToProps = {
};

export default connect(mapStateToProps, mapDispacthToProps)(Dashboard);
