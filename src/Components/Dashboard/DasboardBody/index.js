import React, { useEffect, useState, useMemo } from 'react';
import Profile from '../../../assets/profile.svg';
import axios from 'axios';
import moment from 'moment';
import {
	DasbBody,
	LeftPanel,
	RightPanel,
	ProfileHeader,
	ProfileDisplay,
	LeftHeader,
	LeftSubHeader,
	ListContainer,
	ListItem,
	Flex,
	ButtonContainer,
	RightPanelHeader,
	DashboardContent,
	NavigationBar,
	Tab,
	Container,
	Card,
	InfoContainer,
	Info,
	MobileRightPanelHeader,
} from '../style';
import Home from '../../../assets/homeicon.svg';
import Protection from '../../../assets/protection.svg';
import Linked from '../../../assets/linked.svg';
import Repairs from '../../../assets/repairs.svg';
import Claims from '../../../assets/claims.svg';
import Button from '../../../Components/Common/Button/index';
import Pagination from '../../Common/Pagination/Pagination';
import { useGetData } from '../../../helpers/hooks/useAxios';
import { useLogout } from '../../../helpers';

let PageSize = 3;

const style = {
	width: '40px',
	height: '40px',
};

const linkList = [
	{ src: Home, text: 'Home', active: false },
	{ src: Protection, text: 'Protected Plans', active: true },
	{ src: Linked, text: 'Linked Device', active: false },
	{ src: Repairs, text: 'Repairs', active: false },
	{ src: Claims, text: 'Claims', active: false },
];

function DashboardBody() {
	const [screenProtectionData] = useGetData(
		'https://gamp-server-staging.herokuapp.com/v1/plan/spplan/fetch'
	);

	const [currentPage, setCurrentPage] = useState(1);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;

		return screenProtectionData.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, screenProtectionData]);

	const [handleLogout] = useLogout();

	return (
		<DasbBody>
			<LeftPanel>
				<ProfileHeader>
					<img src={Profile} alt='g' style={style} />
					<ProfileDisplay>
						<LeftHeader>
							<p>My Profile</p>
						</LeftHeader>
						<LeftSubHeader>
							<p>Paul Omotayo</p>
						</LeftSubHeader>
					</ProfileDisplay>
				</ProfileHeader>
				<ListContainer>
					{linkList.map((item, i) => {
						return (
							<ListItem
								key={item.text}
								className={item.active ? 'active' : null}
								onMouseEnter={(e) => console.log(e)}>
								<Flex>
									<>
										<img src={item.src} alt='' />
									</>
									<p>{item.text}</p>
								</Flex>
							</ListItem>
						);
					})}
				</ListContainer>
				<ButtonContainer>
					<Button
						border='1px solid #49A05C'
						color='#fff'
						bgColor='#49A05C'
						height='40px'
						onClick={(e) => handleLogout(e)}
						radius='4px'
						width='100%'
						text='Logout'
						fontWeight={400}
						fontSize='16px'
					/>
				</ButtonContainer>
			</LeftPanel>

			<RightPanel>
				<RightPanelHeader>
					<h1>Protection Plans</h1>
				</RightPanelHeader>

				<DashboardContent>
					<NavigationBar>
						<Tab active={true}>
							<p>SCREEN PROTECTION</p>
							<div></div>
						</Tab>
						<Tab>
							<p>SERVICE CONTRACT</p>
							<div></div>
						</Tab>
					</NavigationBar>
					<Container>
						{currentTableData.map((item, i) => {
							return (
								<Card key={2 * i}>
									<InfoContainer>
										<Info>
											<h3>Date Purchased</h3>
											<p>{item.createdAt.slice(0, 9)}</p>
										</Info>
										<Info>
											<h3>Amount Paid</h3>
											<p>N{item.price}</p>
										</Info>
										<Info>
											<h3>Phones Covered</h3>
											<p>{item.activatedPhones}</p>
										</Info>
										<Info>
											<h3>Phones Covered</h3>
											<p>{item.activatedLaptops}</p>
										</Info>
									</InfoContainer>
									<div id='buttonContainer'>
										<Button
											border='1px solid #49A05C'
											color='#fff'
											bgColor='#49A05C'
											height='40px'
											onClick={null}
											radius='4px'
											width='100%'
											text='View Details'
											fontWeight={400}
											fontSize='14px'
											padding='10px 25px'
										/>
									</div>
								</Card>
							);
						})}
					</Container>
					<Pagination
						className='pagination-bar'
						currentPage={currentPage}
						totalCount={screenProtectionData.length}
						pageSize={PageSize}
						onPageChange={(page) => setCurrentPage(page)}
					/>
				</DashboardContent>
			</RightPanel>
		</DasbBody>
	);
}

export default DashboardBody;
