import { useEffect, useState } from 'react';
import axios from 'axios';
import { batch } from 'react-redux';
import { useAppContext } from '../../redux/slice';
import { setScreenProtectionData } from '../../redux/slice/appSlice';

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
