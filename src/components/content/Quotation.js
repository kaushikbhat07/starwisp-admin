import React, { useState } from 'react';
import { Card } from 'reactstrap';
import './Quotation.css'

function Quotation() {
	// const [count, setCount] = useState(0);

	return (
		<div>
			<Card className="quotation-card shadow p-3">
				<p>
					<h3>Quotation</h3>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut nesciunt, corrupti, fugit a fuga sed quos harum totam, distinctio provident facere maxime id hic. Eius alias ab impedit nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, accusamus! Non quod quis similique sed ipsam possimus beatae inventore dolorem at, sequi aperiam rerum tempore
				</p>
			</Card>
		</div>
	);
}

export default Quotation;