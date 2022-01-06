import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	background: #f5faff;
	height: 100vh;
	width: auto;
`;
export const NavbarContainer = styled.nav`
	height: 80px;
	display: flex;
	justify-content: space-between;
	padding: 1.5rem 2rem;
	margin-bottom: 3rem;
	@media only screen and (min-width: 320px) and (max-width: 360px) {
		padding: 1.5rem 1rem;
	}
	@media only screen and (min-width: 360px) and (max-width: 414px) {
		padding: 1.5rem 1rem;
	}
	@media only screen and (min-width: 414px) and (max-width: 720px) {
		padding: 1.5rem 1rem;
	}
	@media only screen and (min-width: 720px) and (max-width: 1200px) {
	}
`;
export const LogoContainer = styled.div``;
export const DesktopMenuContainer = styled.div`
	ul {
		display: flex;
		list-style: none;
		height: 40px;

		li {
			padding: 0rem 2.5rem;
			justify-content: center;
			display: flex;
			align-items: center;
			margin-right: 10px;
		}
		li:nth-child(3) {
			border: 1px solid #00b600;
			border-radius: 5px;
		}
		li:nth-child(4) {
			margin-right: 0px;
			padding-right: 0px;
		}
	}
	@media only screen and (min-width: 320px) and (max-width: 360px) {
		display: none;
	}
	@media only screen and (min-width: 360px) and (max-width: 414px) {
		display: none;
	}
	@media only screen and (min-width: 414px) and (max-width: 786px) {
		display: none;
	}
	@media only screen and (min-width: 786px) and (max-width: 986px) {
		display: none;
	}
`;

export const ProfileContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 6px;
	img {
		margin-right: 2px;
	}
`;

export const DasbBody = styled.div`
	display: flex;
	height: 500px;
	padding: 1rem 3.5rem 0rem 5rem;
	justify-content: space-between;
	@media only screen and (min-width: 320px) and (max-width: 360px) {
		padding: 1rem 14px;
		height: 80vh;
	}
	@media only screen and (min-width: 360px) and (max-width: 414px) {
		padding: 1rem 14px;
		height: 80vh;
	}
	@media only screen and (min-width: 414px) and (max-width: 720px) {
		padding: 1rem 14px;
		height: 80vh;
	}
	@media only screen and (min-width: 720px) and (max-width: 1200px) {
	}
	@media only screen and (min-width: 1200px) {
		height: 500px;
	}
`;

export const LeftPanel = styled.div`
	background: #fff;
	width: 25%;
	max-width: 275px;
	height: 100%;
	border-radius: 10px;
	@media only screen and (min-width: 320px) and (max-width: 360px) {
		display: none;
	}
	@media only screen and (min-width: 360px) and (max-width: 414px) {
		display: none;
	}
	@media only screen and (min-width: 414px) and (max-width: 720px) {
		display: none;
	}
	@media only screen and (min-width: 720px) and (max-width: 1200px) {
		display: none;
	}
`;

export const RightPanel = styled.div`
	background: transparent;
	width: 73%;
	height: 100%;
	border-radius: 10px;
	@media only screen and (min-width: 320px) and (max-width: 360px) {
		width: 100%;
	}
	@media only screen and (min-width: 360px) and (max-width: 414px) {
		width: 100%;
	}
	@media only screen and (min-width: 414px) and (max-width: 720px) {
		width: 100%;
	}
	@media only screen and (min-width: 720px) and (max-width: 1200px) {
		width: 100%;
	}
`;

export const ProfileHeader = styled.div`
	height: 80px;
	width: 100%;
	border-bottom: 0.6px solid #49a05c;
	display: flex;
	padding: 0rem 19px;
	align-items: center;
	gap: 20px;
`;

export const LeftHeader = styled.div`
	display: flex;
	margin-bottom: 7px;
	p {
		font-size: 12px;
		color: #49a05c;
		font-weight: 600;
	}
`;
export const LeftSubHeader = styled.div`
	display: flex;
	font-weight: 400;
	font-size: 18px;
	p {
		font-weight: 400;
	}
`;

export const ListContainer = styled.ul`
	padding: 0;
`;

export const ListItem = styled.li`
	display: flex;
	height: 45px;
	align-items: center;
	padding: 0rem 29px;
	p {
		font-weight: 300;
	}
	&.active {
		background: #dcfce840;
	}
	&:hover {
		background: #dcfce840;
	}
`;

export const Flex = styled.div`
	display: flex;
	img {
		margin-right: 34px;
	}
`;

export const ProfileDisplay = styled.div``;

export const ButtonContainer = styled.div`
	padding: 1rem 3rem;
`;

export const RightPanelHeader = styled.div`
	height: 48px;
	border-radius: 5px;
	background: #fff;
	display: flex;
	align-items: center;
	padding: 0rem 32px;

	h1 {
		font-size: 18px;
		margin: 0;
		font-weight: 600;
	}
	/* @media only screen and (min-width: 320px) and (max-width: 360px) {
		display: none;
	}
	@media only screen and (min-width: 360px) and (max-width: 414px) {
		display: none;
	}
	@media only screen and (min-width: 414px) and (max-width: 786px) {
		display: none;
	}
	@media only screen and (min-width: 786px) and (max-width: 1200px) {
		display: none;
	} */
`;

// export const MobileRightPanelHeader = styled.div`
// 	height: 48px;
// 	border-: 0.6px solid #49a05c;
// 	display: flex;
// 	align-items: center;
// 	padding: 0rem 32px;
// `;

export const DashboardContent = styled.div`
	padding: 1.5rem 2rem 4rem;
	height: calc(100% - 45px);
	position: relative;
	background: #fff;
	@media only screen and (min-width: 320px) and (max-width: 360px) {
		padding: 1.5rem 1rem 4rem;
		border-top: 4px solid #f5faff;
		border-radius: 7px;
	}
	@media only screen and (min-width: 360px) and (max-width: 414px) {
		padding: 1.5rem 1rem 4rem;
		border-top: 4px solid #f5faff;
		border-radius: 7px;
	}
	@media only screen and (min-width: 414px) and (max-width: 720px) {
		padding: 1.5rem 1rem 4rem;
		border-top: 4px solid #f5faff;
		border-radius: 7px;
	}
	@media only screen and (min-width: 720px) and (max-width: 1200px) {
		padding: 1.5rem 1rem 4rem;
		border-top: 4px solid #f5faff;
		border-radius: 7px;
	}
	@media only screen and (min-width: 1200px) {
		border-top: 0.6px solid #49a05c;
		border-radius: 0px;
	}
`;

export const NavigationBar = styled.div`
	border-bottom: 0.5px solid #989898;
	height: 1.875rem;
	display: flex;
	gap: 50px;
`;

export const Tab = styled.div`
	${({ active }) =>
		active
			? css`
					color: #49a05c;
			  `
			: css`
					color: #858585;
			  `}
	position: relative;
	cursor: pointer;
	p {
		font-size: 14px;
		font-weight: 700;
		@media only screen and (min-width: 320px) and (max-width: 360px) {
			font-size: 11px;
		}
		@media only screen and (min-width: 360px) and (max-width: 414px) {
			font-size: 11px;
		}
		@media only screen and (min-width: 414px) and (max-width: 720px) {
			font-size: 11px;
		}
		@media only screen and (min-width: 720px) and (max-width: 1200px) {
			font-size: 11px;
		}
	}
	div {
		${({ active }) =>
			active
				? css`
						border: 1px solid #49a05c;
				  `
				: css`
						border: 1px solid transparent;
				  `}
		position: absolute;
		width: 100%;
		bottom: 0;
		border-radius: 6px;
	}
`;

export const Container = styled.div`
	margin: 1rem 0rem;
	height: calc(100% - 3.375rem);
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Card = styled.div`
	border: 0.6px solid #49a05c;
	border-radius: 4px;
	padding: 1rem 1.3rem;
	display: grid;
	grid-template-columns: repeat(1, 4fr 1fr);
	justify-content: space-between;
	margin-bottom: 1rem;
	h3 {
		font-size: 14px;
		font-weight: 400;
	}
	p {
		color: #0d7010;
		font-weight: 500;
		font-size: 14px;
		text-align: left;
		margin: 0.3rem 0rem 0.5rem;
	}

	@media only screen and (min-width: 320px) and (max-width: 360px) {
		grid-template-rows: repeat(2, auto);
		grid-template-columns: repeat(1, 1fr);
		button {
			margin-top: 20px;
		}
	}
	@media only screen and (min-width: 360px) and (max-width: 414px) {
		grid-template-rows: repeat(2, auto);
		grid-template-columns: repeat(1, 1fr);
		button {
			margin-top: 20px;
		}
		#buttonContainer {
			padding-right: 10px;
		}
	}
	@media only screen and (min-width: 414px) and (max-width: 720px) {
		grid-template-rows: repeat(2, auto);
		grid-template-columns: repeat(1, 1fr);
		button {
			margin-top: 20px;
		}
	}
	@media only screen and (min-width: 720px) and (max-width: 920px) {
		grid-template-columns: repeat(1, 4fr 1.5fr);
	}
	@media only screen and (min-width: 920px) and (max-width: 1200px) {
	}
`;

export const InfoContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 105px);
	width: 75%;
	gap: 7%;
	justify-content: space-between;
	@media only screen and (min-width: 320px) and (max-width: 360px) {
		grid-template-columns: repeat(2, 105px);
		width: 100%;
		gap: 10px 0;
	}
	@media only screen and (min-width: 360px) and (max-width: 414px) {
		grid-template-columns: repeat(2, 105px);
		width: 100%;
		gap: 10px 0;
	}
	@media only screen and (min-width: 414px) and (max-width: 720px) {
		grid-template-columns: repeat(2, 105px);
		width: 100%;
		gap: 10px 0;
	}
	@media only screen and (min-width: 720px) and (max-width: 920px) {
		grid-template-columns: repeat(2, 130px);
	}
	@media only screen and (min-width: 920px) and (max-width: 1200px) {
	}
`;

export const Info = styled.div``;
