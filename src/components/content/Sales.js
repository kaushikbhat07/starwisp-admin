import React, { useState } from 'react';
import { Card } from 'reactstrap';
import './Sales.css'
import { Pie, Doughnut } from 'react-chartjs-2';

function Sales() {
	// const [count, setCount] = useState(0);

	const data = {
		labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
		datasets: [{
			label: "Sales Report",
			backgroundColor: ['#f21b3f', '#ffe900', '#53b3cb', '#083d77', '#820263', '#5e3719'],
			borderColor: '#fff',
			data: [4000, 5000, 6000, 4500, 3500],
			borderWidth: "3"
		}
		]
	};

	return (
		<div>
			<Card className="sales-card shadow p-3">
				<p>
					<h4 className="text-center">Sales Report</h4>
					<Doughnut data={data} width={40} height={25} />
				</p>
			</Card>
		</div>
	);
}

export default Sales;