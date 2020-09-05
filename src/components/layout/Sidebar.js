import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom'

function Sidebar() {
	return (
		<aside className="d-flex flex-column">
			<ul className="navbar-nav navbar-light bg-light sidebar text-center">

				<li className="nav-item">
					<NavLink to='/hello' className="nav-link active">
						Dashboard
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to='/hello' className="nav-link">
						University
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to='/hello' className="nav-link">
						System
					</NavLink>
				</li>
			</ul>

		</aside>
	);
}

export default Sidebar;
