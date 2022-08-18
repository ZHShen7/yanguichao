import React from 'react';
import { useRoutes } from 'react-router';
import routes from './routes';
import './App.css';

function App() {
	const element = useRoutes(routes)
	return (
		<div className='app'>
			{element}
		</div>
	);
}

export default App;
