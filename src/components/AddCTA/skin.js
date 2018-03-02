import { css } from 'styled-components';

export const AddCTAButton = ({ theme }) => css`
    background: ${theme.buttonSuccess};
    border-radius: 5%;
    bottom: 0;
    right: 0;
    padding: 7px;
    cursor: pointer;
`;

export const AddCTAText = ({ theme }) => css`
	cursor: pointer;
	font-size: 15px;
	
	strong {
		font-size: 18px;
		color: ${theme.buttonSuccess};
	}
`;
