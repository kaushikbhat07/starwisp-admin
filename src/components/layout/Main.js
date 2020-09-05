import React from 'react';
import './Main.css';
import Quotation from '../content/Quotation'
import Revenue from '../content/Revenue'
import Sales from '../content/Sales'
import Services from '../content/Services'
import Activity from '../content/Activity'
import Messages from '../content/Messages'
import Social from '../content/Social'
import Footer from "./Footer";

function Main() {
	return (
		<section>
			<div className="main-section container">
				<div className="row pl-3 pr-3">
					<div className="col-5">
						<div>
							<Quotation />
						</div>
						<div className="mt-4">
							<Sales />
						</div>
					</div>
					<div className="col-7">
						<Revenue />
						<div className="row">
							<div className="col-6">
								<div className="mt-4">
									<Services />
								</div>
							</div>
							<div className="col-6">
								<div className="mt-4">
									<Activity />
								</div>
							</div>
						</div>
					</div>
					<div className="col-9">
						<div className="messages-section">
							<Messages />
						</div>
					</div>	
					<div className="col-12 mt-4">
						<div>
							<Social />
						</div>
					</div>									
				</div>
				<Footer />
			</div>

		</section>
	);
}

export default Main;
