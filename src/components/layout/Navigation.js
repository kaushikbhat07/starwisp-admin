import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarText} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import './Navigation.css';

function Navigation() {
	// const [count, setCount] = useState(0);

	return (
		<header>
			<Navbar color="light" light expand="md" className="shadow fixed-top">
				<NavbarBrand className="ml-5">
					<a href="/dashboard"><img src="images/logo.jpg" alt="Starwisp Logo" /></a>
				</NavbarBrand>
 				<NavbarText className="ml-auto">
					<Nav>
						<NavItem>
							<NavLink className="nav-link" to="/hello"><span class="fa fa-clipboard"></span></NavLink>
						</NavItem>						
						<NavItem>
							<NavLink className="nav-link" to="/hello"><span className="fa fa-plus"></span></NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="nav-link" to="/hello"><span className="fa fa-bell"></span></NavLink>
						</NavItem>
						<NavItem>
							<a className="nav-link">
								<button className="btn btn-secondary"></button>
							</a>
						</NavItem>						
					</Nav>					
				</NavbarText>				
			</Navbar>
		</header>
	);
}

export default Navigation;


{/* <NavbarToggler onClick={this.toggle} />
<Collapse isOpen={this.state.isNavOpen} navbar center className="icons-right">
	<Nav className="text-center" navbar>
		<NavItem>
			<a onClick={this.toggle} className="nav-link" to="/dashboard">Dashboard&nbsp;<span className="fa fa-table"></span></a>
		</NavItem>
		<NavItem>
			<a onClick={this.toggle} className="nav-link" to="/india">India&nbsp;<span className="fa fa-home"></span></a>
		</NavItem>
		<NavItem onClick={this.toggleModal}>
			<a className="nav-link">About&nbsp;<span className="fa fa-question-circle"></span></a>
		</NavItem>
	</Nav>
</Collapse> */}