import React from 'react';
import Profile from '../../../../assets/profile.svg';
import Chevron from '../../../../assets/chevron.svg';
import { DesktopMenuContainer, ProfileContainer } from '../../style';

function RightMenu() {
	return (
		<DesktopMenuContainer>
			<ul>
				<li>Repair</li>
				<li>Business</li>
				<li>Protect Device</li>
				<li>
					<ProfileContainer>
						<img src={Profile} />
						<div>
							<p>Hi, Omotayo</p>
						</div>
						<img src={Chevron} />
					</ProfileContainer>
				</li>
			</ul>
		</DesktopMenuContainer>
	);
}

export default RightMenu;
