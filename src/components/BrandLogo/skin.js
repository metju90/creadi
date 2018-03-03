import { css } from 'styled-components';

export const Text = () => css`
	color: white;
    font-family: 'Pacifico',cursive;
    font-size: 40px;
    letter-spacing: 10px;
    padding: 0 25px;

    @media (min-width: 768px) {
    	font-size: 50px;
    }
`;
