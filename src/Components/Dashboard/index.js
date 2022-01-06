import React from 'react';
import DashboardBody from './DasboardBody';
import Navbar from './Navbar';
import { Wrapper } from './style';

function index() {
	return (
		<Wrapper>
			<Navbar />
			<DashboardBody />
		</Wrapper>
	);
}

export default index;
