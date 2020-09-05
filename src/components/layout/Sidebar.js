import React from 'react';
import './Sidebar.css';

function Sidebar() {
	return (
		<aside className="d-flex flex-column">
			<ul className="navbar-nav navbar-light bg-light sidebar text-center">

				<li className="nav-item">
					<a className="nav-link" href="index.html">
						<span>Dashboard</span>
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="index.html">
						<span>Dashboard</span>
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="index.html">
						<span>Dashboard</span>
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="index.html">
						<span>Dashboard</span>
					</a>
				</li>
			</ul>

		</aside>
	);
}

export default Sidebar;
