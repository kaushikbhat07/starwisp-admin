import React from 'react';
import './Main.css';
import Quotation from '../content/Quotation'
import Revenue from '../content/Revenue'
import Sales from '../content/Sales'
import Services from '../content/Services'

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
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum officia sapiente necessitatibus autem accusamus, reprehenderit quis aliquam fugiat rerum modi quasi quibusdam voluptatibus, rem recusandae mollitia vero minus corrupti adipisci.
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
	);
}

export default Main;
