import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoggedIn: false,
	accessToken: '',
	screenProtectionData: [],
};

export const appSlice = createSlice({
	name: 'appDefaultContext',
	initialState,
	reducers: {
		setIsLoggedIn: (state, { payload }) => {
			state.isLoggedIn = payload;
		},
		setAccessToken: (state, { payload }) => {
			state.accessToken = payload;
		},
		setScreenProtectionData: (state, { payload }) => {
			state.screenProtectionData = payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setIsLoggedIn, setAccessToken, setScreenProtectionData } =
	appSlice.actions;

export default appSlice.reducer;
