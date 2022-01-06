import { batch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../redux/slice';
import { setAccessToken, setIsLoggedIn } from '../redux/slice/appSlice';

export function useLogout() {
	const navigate = useNavigate();
	const [, dispatch] = useAppContext();

	const handleLogout = () => {
		batch(() => {
			dispatch(setIsLoggedIn(false));
			dispatch(setAccessToken(''));
		});
		navigate('/');
	};

	return [handleLogout];
}
