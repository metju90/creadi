import { css } from 'styled-components';

export const FooterWrapper = () => css`
	background: #000;
	position: fixed;
	height: 80px;
	bottom:0;
	width:100%;
	color:#fff;
	z-index:2;
`;

export const ContentWrapper = () => css`
	width: 360px;
	display: flex;
	justify-content: space-between;
	margin: auto;
    height: 100%;
    align-items: center;
`;
