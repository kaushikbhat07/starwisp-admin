import React from 'react';
import './Main.css';
import Quotation from '../content/Quotation/Quotation'
import Revenue from '../content/Revenue/Revenue'
import Sales from '../content/Sales/Sales'
import Services from '../content/Services/Services'
import Activity from '../content/Activity/Activity'
import Messages from '../content/Messages/Messages'
import Social from '../content/Social/Social'
import Footer from "./Footer";

function Main() {
	return (
		<section>
			<div className="main-section container">
				<div className="row pl-3 pr-3">
					<div className="col-sm-12 col-md-12 col-lg-5">
						<div>
							<Quotation />
						</div>
						<div className="mt-4">
							<Sales />
						</div>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-7">
						<Revenue />
						<div className="row">
							<div className="col-sm-12 col-md-12 col-lg-6">
								<div className="mt-4">
									<Services />
								</div>
							</div>
							<div className="col-sm-12 col-md-12 col-lg-6">
								<div className="mt-4">
									<Activity />
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-9">
						<div className="messages-section">
							<Messages />
						</div>
					</div>	
					<div className="col-sm-12 col-md-12 col-lg-12 mt-4">
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
