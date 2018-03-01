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
`;
