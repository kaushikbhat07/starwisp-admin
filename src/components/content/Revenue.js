import React, { useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import './Revenue.css'
import { Bar } from 'react-chartjs-2';

function Revenue() {
	// const [count, setCount] = useState(0);

	const data = {
		labels: ["Jan", "Feb", "Mar", "Apr", "June", "Jul", "Aug", "Sept"],
		datasets: [{
			label: 'Monthly Revenue',
			backgroundColor: '#1d3557',
			hoverBackgroundColor: '#007bff',
			borderColor: '#000',
			data: [140000, 135000, 140000, 134000, 140000, 150000, 160000, 150000]
		}]
	};

	return (
		<div>
			<Card className="revenue-card shadow p-3">
				<p>
					<h4 className="text-center">Revenue</h4>
					<Bar data={data} width={100} height={40} />
				</p>
			</Card>
		</div>
	)
}

export default Revenue;