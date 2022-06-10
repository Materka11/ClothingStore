import React from 'react';

import '../style/mobile/NewItemMobile.css';

import newItem from '../img/wethenew-sneakers-france-adidas-yeezy-cloud-white-reflective-1_2000x0.png';

import { Link } from 'react-router-dom';

function NewItem({ classNone }) {
	return (
		<div className={`newItem ${classNone}`}>
			<div className="inside">
				<h1>Nowe przdmioty</h1>
				<h1>Nowości już w sklepie</h1>
				<Link to="/allproducts/sub/size/brand/color/detail/ByNewest" className="linkTO">
					Odkryj teraz -&gt;
				</Link>
				<img src={newItem} alt="Nowy przedmiot" />
				<div className="backgroundForNewItem" />
			</div>
		</div>
	);
}

export default NewItem;
