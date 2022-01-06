import { useDispatch, useSelector } from 'react-redux';

export const useAppContext = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.appContext);
	return [state, dispatch];
};
