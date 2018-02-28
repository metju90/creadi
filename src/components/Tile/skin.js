import { css } from 'styled-components';

export const TileWrapper = ({ theme }) => {
  const randomNumber = Math.floor((Math.random() * 6));
  return css`
  		text-align: center;
  		cursor: pointer;
		background: ${theme.colorSet[randomNumber]};
		padding: 20px;
		border-radius: 0 15px 0 15px;
		background-image: linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.2) 100%);

		&:hover {
			background:red;
		}
`;
};

export const Title = () => css`
	font-weight: 500;
`;

export const Premium = () => css`
	
`;
