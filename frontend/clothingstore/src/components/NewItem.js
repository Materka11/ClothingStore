import React from 'react';

import '../style/mobile/NewItemMobile.css';

import newItem from '../img/wethenew-sneakers-france-adidas-yeezy-cloud-white-reflective-1_2000x0.png';

function NewItem({ classNone }) {
	return (
		<div className={`newItem ${classNone}`}>
			<div>
				<h1>Nowe przdmioty</h1>
				<h1>Nowości już w sklepie</h1>
				<h3 className="linkTO">Odkryj teraz -&gt;</h3>
				<img src={newItem} alt="Nowy przedmiot" />
			</div>
		</div>
	);
}

export default NewItem;
