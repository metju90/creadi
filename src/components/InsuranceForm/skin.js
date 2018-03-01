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
    border-bottom: 2px solid black;
    width: 100%;
    margin-top: 10px;
    outline: none;
    background: rgba(0,0,0,0.2);
    height: 30px;
    padding: 4px;

    &:focus {
    	background: rgba(0,0,0,0.2);
    }
`;

export const HeaderTitle = () => css`
	font-size: 19px;
	font-weight: 700;
`;

export const InputTitle = () => css`
	margin-top: 30px;
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
`;

export const Select = () => css`
    background: transparent;
   border: none;
   font-size: 14px;
   height: 29px;
   padding: 5px;
   width: 260px;
   cursor: pointer;
`;

export const SelectWrapper = () => css`
    background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 96% 0;
   height: 29px;
   overflow: hidden;
   width: 240px;
   background-color: #3b8ec2;
    -webkit-border-radius: 5px;
   -moz-border-radius: 5px;
   border-radius: 5px;
`;
