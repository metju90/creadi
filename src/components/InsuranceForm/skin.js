import { css } from 'styled-components';

export const Modal = () => css`
 	width: 330px;
`;

export const Header = () => css`
	border-bottom: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = () => css`
    text-align: left;
    width: 260px;
    margin: auto;
`;

export const Input = () => css`
    border: none;
    border-bottom: 2px solid #000;
    width: 100%;
    outline: none;
    background: transparent;
    height: 30px;
    color:#000;

`;

export const HeaderTitle = () => css`
	font-size: 19px;
	font-weight: 700;
`;

export const InputTitle = () => css`
	  margin: 30px 0 20px;
    font-weight: 500;
    font-size: 16px;
    display: block;
`;

export const Submit = ({ theme }) => css`
    background: ${theme.buttonSuccess};
	  text-transform: uppercase;
    margin-top: 20px;
    padding: 10px;
    border-radius: 2px;
    width: 140px;
    box-shadow: 0 0 10px rgba(0,0,0,0.4);
    float: right;
    outline:none;
    transition: color .3s, background .3s;
    cursor: pointer;
    color:#fff;
    
    &:disabled {
      background: rgba(0,0,0,0.5);
      color: #fff;;
      cursor: not-allowed;
    }
`;

export const Select = () => css`
    background: transparent;
   border: none;
   font-size: 14px;
   width:100%;
   cursor: pointer;
   outline: none;
   margin-left: -7px;
`;

export const SelectWrapper = () => css`
   height: 30px;
   color:#000;
   border-bottom: 2px solid #000;
   &:focus {
     border:none;
   }
`;
