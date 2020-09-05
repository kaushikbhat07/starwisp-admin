import React from 'react';
import { Card } from 'reactstrap';
import './Social.css'
import { Bar } from 'react-chartjs-2'

function Social() {
	// const [count, setCount] = useState(0);

	const data = {
		labels: ["Instagram", "Facebook", "LinkedIn", "Reddit", "YouTube"],
		datasets: [{
			label: '',
			backgroundColor: 'rgba(29,53,87,0.5)',
			hoverBackgroundColor: 'rgba(29,53,87,0.7)',
			data: [120, 150, 95, 190, 130]
		},
		{
			label: '',
			backgroundColor: '#000',
			hoverBackgroundColor: '#000',
			borderColor: '#000',
			type: 'line',
			fill: 'false',
			data: [120, 150, 95, 190, 130]
		},
		]
	};

	return (
		<div>
			<Card className="social-card shadow p-3">
				<p>
					<h4 className="text-center">Social Source</h4>
					<Bar data={data} width={100} height={30} />
				</p>
			</Card>
		</div>
	);
}

export default Social;