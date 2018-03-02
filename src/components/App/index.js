import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import Dashboard from '../Dashboard';
import InsuranceForm from '../InsuranceForm';
import Footer from '../Footer';
import Header from '../Header';

class App extends Component {
  render() {
    return [
      <Header />,
      <Dashboard />,
      <InsuranceForm />,
      <Footer />,
    ];
  }
}

export default App;
