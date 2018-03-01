import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import Dashboard from '../Dashboard';
import InsuranceForm from '../InsuranceForm';

class App extends Component {
  render() {
    return [
      <Dashboard />,
      <InsuranceForm />,
    ];
  }
}

export default App;
