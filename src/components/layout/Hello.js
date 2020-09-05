import React from 'react';
import './Main.css';
import { Jumbotron, Button } from 'reactstrap';
import Footer from "./Footer";	
import { NavLink } from 'react-router-dom'

function Hello() {
	return (
		<section>
			<div className="main-section container">
				<div className="row pl-3 pr-3">
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

export default Hello;
