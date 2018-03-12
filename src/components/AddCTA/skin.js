import { css } from 'styled-components';

export const AddCTAButton = ({ theme }) => css`
    background: ${theme.buttonSuccess};
    border-radius: 5%;
    bottom: 0;
    right: 0;
    padding: 7px;
    cursor: pointer;
    transition: transform .3s, background .3s;

    &:active {
      transform: translateY(4px);
    }

    &:hover {
    	background: #3e8e41;
    }
`;

export const AddCTAText = ({ theme }) => css`
	cursor: pointer;
	font-size: 15px;
	
	strong {
		font-size: 18px;
		color: ${theme.buttonSuccess};
	}
    transition: transform .3s, text-shadow .3s;

    &:active {
      transform: translateY(4px);
    }

    &:hover {
    	text-shadow: 0px 0px 20px rgba(255,255,225,0.7);
    }
`;
