import React from 'react';
import './Sidebar.css';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'

function Sidebar() {
	return (
		<aside className="d-flex flex-column">
			<Nav navbar className="bg-light d-none d-sm-block sidebar text-center">
				<NavItem>
					<NavLink className="nav-link" to="/home">Dashboard</NavLink>
				</NavItem>
				<NavItem>
					<NavLink className="nav-link" to="/add">University</NavLink>
				</NavItem>
				<NavItem>
					<NavLink className="nav-link" to="/notifications">System</NavLink>
				</NavItem>
			</Nav>
		</aside>
	);
}

export default Sidebar;
