import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import Dashboard from '../Dashboard';
import InsuranceForm from '../InsuranceForm';
import Footer from '../Footer';
import BrandLogo from '../BrandLogo';

class App extends Component {
  render() {
    return [
      <BrandLogo />,
      <Dashboard />,
      <InsuranceForm />,
      <Footer />,
    ];
  }
}

export default App;
