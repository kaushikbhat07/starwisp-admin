import React from 'react';
import Main from "./components/layout/Main";
import Navigation from "./components/layout/Navigation";
import Sidebar from "./components/layout/Sidebar";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';

function App() {
	return (
		<div className="App">
			<Navigation />
			
			<div className="pt-100 d-flex flex-row">
				<Sidebar />

				<Main />
			</div>

		</div>
	);
}

export default App;
