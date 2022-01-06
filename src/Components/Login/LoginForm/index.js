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
import { usePostData } from '../../../helpers/hooks/useAxios';

function LoginFormContainer() {
	const [submitForm, handleEmailChange, handlePassChange] = usePostData();

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
