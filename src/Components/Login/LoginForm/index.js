import React, { memo, useState } from 'react';
import axios from 'axios';
import {
	FormContainer,
	Container,
	LogoContainer,
	Form,
	Input,
	Button,
	FormFooter,
} from '../style';
import Logo from '../../../assets/logo.svg';
import { useAppContext } from '../../../redux/slice';
import { setIsLoggedIn, setAccessToken } from '../../../redux/slice/appSlice';
import { batch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ControlledInput from './Input';

function LoginFormContainer() {
	const navigate = useNavigate();
	const [, dispatch] = useAppContext();
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const postData = () => {
		axios
			.post('https://gamp-server-staging.herokuapp.com/v1/auth/login', {
				email: email,
				password: pass,
			})
			.then(function (response) {
				if (response) {
					const {
						data: { accesstoken },
						success,
					} = response.data;

					batch(() => {
						dispatch(setIsLoggedIn(success));
						dispatch(setAccessToken(accesstoken));
					});
					navigate('/dashboard');
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	const submitForm = (e) => {
		e.preventDefault();
		postData();
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePassChange = (e) => {
		setPass(e.target.value);
	};

	return (
		<FormContainer>
			<Container>
				<LogoContainer>
					<img src={Logo} alt={'h'} />
				</LogoContainer>
				<Form onSubmit={submitForm}>
					<>
						<ControlledInput
							type='text'
							placeholder='Email Address or Phone Number'
							id='email'
							onChange={handleEmailChange}
						/>
					</>
					<>
						<ControlledInput
							type='password'
							placeholder='Password'
							id='pass'
							onChange={handlePassChange}
						/>
					</>
					<>
						<Button type='submit'>Log in</Button>
					</>
				</Form>
				<FormFooter>
					<p>Forgot Password?</p>
					<div>
						<p id='copy'>© GAMP</p>
					</div>
				</FormFooter>
			</Container>
		</FormContainer>
	);
}

export default memo(LoginFormContainer);
