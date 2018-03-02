import { css } from 'styled-components';

export const Wrapper = () => css`
	background: black;
	position: fixed;
	height: 60px;
	top:0;
	width:100%;
	z-index:2;
`;

export const Text = () => css`
	color: white;
    font-family: 'Indie Flower',cursive;
    font-size: 50px;
    letter-spacing: 10px;
    padding: 0 25px;
`;
