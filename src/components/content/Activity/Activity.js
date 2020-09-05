import React, { useState } from 'react';
import { Card } from 'reactstrap';
import './Activity.css'

function Activity() {
	// const [count, setCount] = useState(0);

	return (
		<div>
			<Card className="activity-card shadow p-3">
				<p>
					<h4 className="text-center pb-4">Recent Activity</h4>

					<div className="m-3">
						<h6 className="text-danger">All hands meeting</h6>
						<span className="text-md text-muted">Last updated at, 15:00 PM</span>
						<hr/>
					</div>
					<div className="m-3">
						<h6 className="text-warning">Changed settings</h6>
						<span className="text-md text-muted">Last updated at, 15:00 PM</span>
						<hr/>
					</div>
					<div className="m-3">
						<h6 className="text-primary">New curriculum</h6>
						<span className="text-md text-muted">Last updated at, 15:00 PM</span>
						<hr/>
					</div>
					<div className="m-3">
						<h6 className="text-success">Updated post content</h6>
						<span className="text-md text-muted">Last updated at, 15:00 PM</span>
						<hr/>
					</div>
					<div className="m-3">
						<h6 className="text-success">Updated revenue report</h6>
						<span className="text-md text-muted">Last updated at, 15:00 PM</span>
						<hr/>
					</div>
					<div className="m-3">
						<h6 className="text-danger">Design meeting</h6>
						<span className="text-md text-muted">Last updated at, 15:00 PM</span>
						<hr/>
					</div>
					<div className="m-3">
						<h6 className="text-danger">Scrum meeting</h6>
						<span className="text-md text-muted">Last updated at, 15:00 PM</span>
						<hr/>
					</div>
					<div className="m-3">
						<h6 className="text-success">Deployed site</h6>
						<span className="text-md text-muted">Last updated at, 15:00 PM</span>
						<hr/>
					</div>																			
				</p>
			</Card>
		</div>
	);
}

export default Activity;