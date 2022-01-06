import styled from 'styled-components';

export const Wrapper = styled.div`
	background: #f5faff;
	height: 100vh;
	width: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0rem 2rem 0rem 5rem;
	@media only screen and (min-width: 320px) and (max-width: 360px) {
		padding: 0rem 1.5rem;
	}
	@media only screen and (min-width: 360px) and (max-width: 414px) {
		padding: 0rem 1.5rem;
	}
	@media only screen and (min-width: 414px) and (max-width: 786px) {
		padding: 0rem 1.5rem;
	}
	@media only screen and (min-width: 786px) and (max-width: 986px) {
		padding: 0rem 1.5rem;
	}
`;
export const FormContainer = styled.div`
	width: 540px;
	height: 450px;
	border-radius: 10px;
	border: 0.5px solid #858585;
	background: #fff;
	position: relative;
	@media only screen and (min-width: 320px) and (max-width: 720px) {
		height: 495px;
	}
`;

export const LoginImageContainer = styled.div`
	margin-bottom: 70px;
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

export const Container = styled.div`
	height: 100%;
	width: auto;
	display: flex;
	/* justify-content: center; */
	flex-direction: column;
	padding: 1.5rem 3rem;
	overflow: hidden;
	box-sizing: border-box;
	@media only screen and (min-width: 320px) and (max-width: 360px) {
		padding: 1.5rem 2rem;
	}
	@media only screen and (min-width: 360px) and (max-width: 414px) {
		padding: 1.5rem 2rem;
	}
	@media only screen and (min-width: 414px) and (max-width: 786px) {
		padding: 1.5rem 2rem;
	}
	@media only screen and (min-width: 786px) and (max-width: 986px) {
		padding: 1.5rem 2rem;
	}
`;

export const LogoContainer = styled.div`
	max-height: 80px;
	display: flex;
	margin: 0 auto;
`;

export const Input = styled.input`
	font-size: 18px;
	padding: 20px 24px;

	background: #fff;
	outline: none;
	width: 100%;
	border: 0.5px solid #858585;
	border-radius: 10px;
	box-sizing: border-box;
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 18px;
	::placeholder {
		color: #858585;
	}
	&#email {
		margin: 1.5rem 0rem 0rem;
	}
	&#pass {
		margin: 1rem 0rem 0rem;
	}
`;

export const Button = styled.button`
	padding: 12px 24px;
	background: #49a05c;
	margin: 2rem 0rem 0rem;
	outline: none;
	width: 100%;
	border: 0.5px solid #49a05c;
	color: #fff;
	border-radius: 10px;
	box-sizing: border-box;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	/* line-height: 19px; */
`;

export const Form = styled.form`
	width: 100%;
`;

export const FormFooter = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	margin: auto;
	align-items: center;
	p:nth-child(1) {
		font-style: normal;
		font-weight: normal;
		font-size: 13px;
		line-height: 14px;

		color: #12172e;
	}
	div {
		position: absolute;
		bottom: -40px;
		#copy {
			color: #858585;
			font-size: 15px;
		}
		@media only screen and (min-width: 320px) and (max-width: 720px) {
			bottom: 45px;
		}
	}
`;
