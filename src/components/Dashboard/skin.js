import { css } from 'styled-components';

export const Dashboard = () => css`
  background: ${props => (props.isBackgroundRed ? 'red' : 'transparent')} ;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-around;  
  margin: 40px;
`;
