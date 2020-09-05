import React, { useState } from 'react';
import { Card } from 'reactstrap';
import './Quotation.css'

function Quotation() {
	// const [count, setCount] = useState(0);

	return (
		<div>
			<Card className="quotation-card shadow p-3">
				<p>
					<h4 className="text-center">Quotation</h4>
					<span className="text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse consectetur placeat saepe, eveniet, fugiat ab dicta optio atque provident incidunt velit praesentium nulla sint animi neque cumque, rem exercitationem! Qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nostrum incidunt fugit voluptatum sunt quam pariatur corrupti, explicabo ipsam numquam rem nulla, omnis quidem! Autem quia beatae voluptates omnis tempora.</span>
				</p>
			</Card>
		</div>
	);
}

export default Quotation;