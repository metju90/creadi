import { css } from 'styled-components';

export const Dashboard = () => css`
  background: ${props => (props.isBackgroundRed ? 'red' : 'transparent')} ;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-around;  
  position: relative;
  height: 100%;
`;

export const Text = () => css`
  font-size: 70px;
  font-weight: 400;
`;

export const Wrapper = () => css`
  text-align: center;
  margin: auto;
`;

export const Emoji = () => css`
`;
