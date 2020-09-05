import React from 'react';
import './Main.css';
import { Jumbotron, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Footer from "./Footer";
import { NavLink } from 'react-router-dom'

function Notifications() {
	return (
		<section>
			<div className="main-section container">
				<div className="row pl-3 pr-3">
					<Breadcrumb>
						<BreadcrumbItem><NavLink to='/home'>Home</NavLink></BreadcrumbItem>
						<BreadcrumbItem active>Notifications</BreadcrumbItem>
					</Breadcrumb>
					<Jumbotron>
						<h4 className="display-4">Hello team!</h4>
						<p className="lead mt-3">
							<NavLink to='/dashboard'><Button color="danger">Goto Dashboard</Button></NavLink>
						</p>
					</Jumbotron>
				</div>
				<Footer />
			</div>

		</section>
	);
}

export default Notifications;
