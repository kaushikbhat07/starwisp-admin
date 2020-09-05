import React from 'react';
import './Main.css';
import Quotation from '../content/Quotation'
import Revenue from '../content/Revenue'
import Sales from '../content/Sales'

function Main() {
	return (
		<section>
			<div className="main-section container">
				<div className="row pl-3 pr-3">
					<div className="col-5">
						<Quotation />
						<Sales />
					</div>
					<div className="col-7">
						<Revenue />
					</div>					
				</div>
			</div>

		</section>
	);
}

export default Main;
