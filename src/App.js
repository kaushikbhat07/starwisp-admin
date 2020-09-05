import React from 'react';
import RoutePage from './RoutePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<RoutePage />
			</BrowserRouter>
		</div>
	);
}

export default App;
