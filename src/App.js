import React from 'react';
import './App.scss';
import { useAppContext } from './redux/slice';
import Login from './Components/Login';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Dashboard from './Components/Dashboard/index';
import PrivateRoute from './Components/Common/ProtectedRoute';

function App() {
	const [state, dispatch] = useAppContext();
	const { isLoggedIn } = state;
	// use route here
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route
					path='/dashboard'
					element={isLoggedIn ? <Dashboard /> : <Navigate to='/' />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
