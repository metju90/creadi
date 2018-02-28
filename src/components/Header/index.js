import React, { Component } from 'react';
import { He, Cart } from './skin.js';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <He>
        Hellox
        <Cart shake name="shopping-cart" />
        Basket
      </He>
    );
  }
}

export default Header;
