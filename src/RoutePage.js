import React, { Component } from 'react';
import Main from './components/layout/Main'
import Notifications from './components/layout/Notifications'
import Reports from './components/layout/Reports'
import Add from './components/layout/Add'
import Navigation from "./components/layout/Navigation";
import Sidebar from "./components/layout/Sidebar";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class RouterPage extends Component {

	render() {
		return (
			<div>
				<Navigation />
				<div className="pt-100 d-flex flex-row">
					<Sidebar />
					<Switch location={this.props.location}>
						<Route path='/home' component={Main} />
						<Route exact path='/notifications' component={Notifications} />
						<Route exact path='/add' component={Add} />
						<Route exact path='/reports' component={Reports} />
						<Redirect to="/home" />
					</Switch>

				</div>
			</div>
		);
	}

}

export default withRouter(RouterPage);

/* <div id="loader">
	<div id="loader-icon">
		<img src="assets/images/loader.gif" alt="Loading..." />
	</div>
</div> */


/* <div id="goto-top">
<a href="#home" className="text-dark goto-top-btn">
<i className="fa fa-angle-up"></i>
</a>
</div> */