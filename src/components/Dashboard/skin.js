import { css } from 'styled-components';

export const Dashboard = () => css`
  background: ${props => (props.isBackgroundRed ? 'red' : 'transparent')} ;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-around;  
  margin: 40px;
  position: relative;
`;

export const AddNewButton = ({ theme }) => css`
    position: absolute;
    background: ${theme.buttonSuccess};
    border-radius: 50%;
    bottom: 0;
    right: 0;
    padding: 15px;
    cursor: pointer;
`;
