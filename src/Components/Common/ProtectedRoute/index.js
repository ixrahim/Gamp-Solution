import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
	console.log();
	return (
		<Route
			element={({ location }) =>
				false ? (
					children
				) : (
					<Navigate
						to={{
							pathname: '/',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
