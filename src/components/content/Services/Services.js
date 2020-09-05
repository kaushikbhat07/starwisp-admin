import React, { useState } from 'react';
import { Card, Progress } from 'reactstrap';
import './Services.css'

function Services() {
	// const [count, setCount] = useState(0);

	return (
		<div>
			<Card className="services-card shadow p-3">
				<p>
					<h6 className="text-center">Services Sold</h6>

					<span className="text-sm text-left text-muted">Product A</span>
					<span className="text-sm float-right text-muted">25%</span>
					<Progress value={25} />

					<span className="text-sm text-left text-muted">Product B</span>
					<span className="text-sm float-right text-muted">55%</span>
					<Progress color="info" value={50} />
					<span className="text-sm text-left text-muted">Product C</span>
					<span className="text-sm float-right text-muted">75%</span>
					<Progress color="warning" value={75} />
					<span className="text-sm text-left text-muted">Product D</span>
					<span className="text-sm float-right text-muted">SOLD!</span>
					<Progress color="danger" value={100} />
				</p>
			</Card>
		</div>
	);
}

export default Services;