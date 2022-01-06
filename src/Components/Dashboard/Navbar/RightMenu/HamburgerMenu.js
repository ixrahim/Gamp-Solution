import React from 'react';
import styled from 'styled-components';

function HamburgerMenu() {
	return (
		<HamburgerContainer>
			<span></span>
			<span></span>
			<span></span>
		</HamburgerContainer>
	);
}

export default HamburgerMenu;

const HamburgerContainer = styled.div`
	@media only screen and (min-width: 320px) and (max-width: 360px) {
		display: block;
	}
	@media only screen and (min-width: 360px) and (max-width: 414px) {
		display: block;
	}
	@media only screen and (min-width: 414px) and (max-width: 786px) {
		display: block;
	}
	@media only screen and (min-width: 786px) and (max-width: 986px) {
		display: block;
		margin-right: 1.3rem;
	}
	@media only screen and (min-width: 986px) {
		display: none;
	}
	span {
		display: flex;
		width: 18px;
		height: 2px;
		background: #000;
		border-radius: 25px;
		margin: 0.3rem 0.5rem 0rem 0rem;
	}
`;
