import React from 'react';

import '../style/mobile/InterestingOffers.css';

function InterestingOffers({ classNone }) {
	return (
		<div className={`interestingOffers ${classNone}`}>
			<h1>Najciekawsze oferty</h1>
			<h1>Przedmioty wybrane dla Ciebie</h1>
			<h3 className="linkTO">Zobacz więcej -&gt;</h3>
			<div />
		</div>
	);
}

export default InterestingOffers;
