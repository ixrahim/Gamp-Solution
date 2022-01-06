import React from 'react';
import styled, { keyframes } from 'styled-components';

const Button = ({
	border,
	bgColor,
	color,
	text,
	height,
	onClick,
	radius,
	width,
	fontWeight,
	fontSize,
	padding,
}) => {
	return (
		<ButtonContainer
			onClick={onClick}
			style={{
				backgroundColor: bgColor,
				border,
				color,
				borderRadius: radius,
				height,
				width,
				fontWeight,
				fontSize,
				padding,
			}}>
			{text}
		</ButtonContainer>
	);
};

const slideUp = keyframes`
0% {
		transform: translateY(20px);
		opacity: 0;
	}
	100% {
		transform: translateY(0px);
		opacity: 1;
	}
`;

const ButtonContainer = styled.button`
	/* opacity: 0;
	animation: ${slideUp} 1.4s cubic-bezier(1, 0, 0, 1) 1.2s forwards; */
`;

export default Button;
