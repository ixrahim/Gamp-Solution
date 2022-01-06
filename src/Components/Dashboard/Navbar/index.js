import React from 'react';
import Logo from '../../../assets/logo.svg';
import RightMenu from './RightMenu';
import { NavbarContainer, LogoContainer } from '../style';
import HamburgerMenu from './RightMenu/HamburgerMenu';

function Navbar() {
	return (
		<NavbarContainer>
			<LogoContainer>
				<img src={Logo} alt={'h'} />
			</LogoContainer>
			<HamburgerMenu />
			<RightMenu />
		</NavbarContainer>
	);
}

export default Navbar;
