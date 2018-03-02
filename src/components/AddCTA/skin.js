import { css } from 'styled-components';

export const AddCTAButton = ({ theme }) => css`
    background: ${theme.buttonSuccess};
    border-radius: 50%;
    bottom: 0;
    right: 0;
    padding: 15px;
    cursor: pointer;
`;

export const AddCTAText = ({ theme }) => css`
	cursor: pointer;
	
	div:first-child {
		font-size:12px;
	}
	div:not(:first-child) {
		color: ${theme.buttonSuccess};
		cursor: pointer;
		font-size: 18px;
	}
`;
