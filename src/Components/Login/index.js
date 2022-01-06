import React from 'react';
import { Wrapper, LoginImageContainer } from './style';
import LoginFormContainer from './LoginForm';
import LoginImage from '../../assets/gamp-artboard.svg';

function Login() {
	const style = {
		width: '500px',
		height: '600px',
	};
	return (
		<Wrapper>
			<LoginFormContainer />
			<LoginImageContainer>
				<img src={LoginImage} alt='h' style={style} />
			</LoginImageContainer>
		</Wrapper>
	);
}

export default Login;
