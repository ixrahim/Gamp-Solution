import { useEffect, useState } from 'react';
import axios from 'axios';
import { batch } from 'react-redux';
import { useAppContext } from '../../redux/slice';
import {
	setScreenProtectionData,
	setIsLoggedIn,
	setAccessToken,
} from '../../redux/slice/appSlice';
import { useNavigate } from 'react-router-dom';

export function useGetData(url) {
	const [state, dispatch] = useAppContext();
	const { accessToken, screenProtectionData } = state;

	useEffect(() => {
		axios
			.get(url, {
				headers: { accesstoken: accessToken },
			})
			.then(function (response) {
				if (response) {
					const { data } = response.data;

					batch(() => {
						dispatch(setScreenProtectionData(data));
					});
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return [screenProtectionData];
}

export function usePostData() {
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
	return [submitForm, handleEmailChange, handlePassChange];
}
