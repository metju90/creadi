import { css } from 'styled-components';

export const Dashboard = () => css`
  background: ${props => (props.isBackgroundRed ? 'red' : 'transparent')} ;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-around;  
  position: relative;
  height: 100%;
  margin-top: 50px;

  @media (min-width: 768px) {
    margin-top: 0px;
  }

`;

export const Text = () => css`
  font-size: 50px;
  font-weight: 400;

   @media (min-width: 768px) {
    font-size: 70px;
  }
`;

export const Wrapper = () => css`
  text-align: center;
  margin: auto;
`;

export const Emoji = () => css`
`;

export const FullPageLoader = () => css`
  position: fixed;
  top:0;
  right:0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  opacity: 1;
  transition: opacity .3s;
  z-index: 1;
`;
