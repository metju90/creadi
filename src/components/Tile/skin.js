import { css } from 'styled-components';

export const TileWrapper = ({ theme }) => {
  const numberOfColors = theme.colorSet.length;
  const randomNumber = Math.floor((Math.random() * numberOfColors));

  return css`
  		text-align: center;
  		cursor: ${props => (props.isClicked ? 'e-resize' : 'pointer')};
		background: ${(props) => {
					    if (props.index > numberOfColors) {
					      return theme.colorSet[randomNumber];
					    }
					    return theme.colorSet[props.index];
					  }};
		border-radius: 0 0 0 15px;
		background-image: linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.2) 100%);
		width:250px;
		height: 130px;
`;
};

export const Title = () => css`
	font-weight: 500;
`;

export const Premium = () => css`
	font-size: 30px;
`;
export const DeleteWrapper = () => css`
 	height: 130px;;
 	width: 70px;
 	background: #d9534f;
	background-image: linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.2) 100%);
	border-radius: 0 15px 0 0;
	transform: translateX(70px);
    opacity: 1;
    position: absolute;
    right: 0;
    cursor: pointer;
    display: flex;
 `;

export const Wrapper = () => css`
	position: relative;
	display: inline-block;
	overflow: hidden;
	margin: 15px;
`;
export const Slider = () => css`
	width:100%;
    transition: opacity 0.1s, transform 0.25s;
    display:flex;
`;
