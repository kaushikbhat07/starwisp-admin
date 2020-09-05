import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Navigation() {
	// const [count, setCount] = useState(0);

	return (
		<header>
			<Navbar color="light" light expand="md" className="shadow fixed-top">
				<NavbarBrand className="ml-5">
					<img src="images/logo.jpg" alt="Starwisp Logo" />
				</NavbarBrand>

				

			</Navbar>
		</header>
	);
}

export default Navigation;


{/* <NavbarToggler onClick={this.toggle} />
<Collapse isOpen={this.state.isNavOpen} navbar center className="icons-right">
	<Nav className="text-center" navbar>
		<NavItem>
			<NavLink onClick={this.toggle} className="nav-link" to="/dashboard">Dashboard&nbsp;<span className="fa fa-table"></span></NavLink>
		</NavItem>
		<NavItem>
			<NavLink onClick={this.toggle} className="nav-link" to="/india">India&nbsp;<span className="fa fa-home"></span></NavLink>
		</NavItem>
		<NavItem onClick={this.toggleModal}>
			<a className="nav-link">About&nbsp;<span className="fa fa-question-circle"></span></a>
		</NavItem>
	</Nav>
</Collapse> */}