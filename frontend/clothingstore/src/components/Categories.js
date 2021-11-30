import React from 'react';

import '../style/mobile/CategoriesMobile.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faMale, faFemale, faTshirt, faShoePrints, faGlasses, faTag } from '@fortawesome/free-solid-svg-icons';

function Categories({ classNone }) {
	return (
		<div className={`categories ${classNone}`}>
			<h1>Kategorie</h1>
			<div>
				<FontAwesomeIcon className="icon" icon={faTh} />
				<h1>Wszystko</h1>
			</div>
			<div>
				<FontAwesomeIcon className="icon person male" icon={faMale} />
				<h1>Mężczyźni</h1>
			</div>
			<div>
				<FontAwesomeIcon className="icon person" icon={faFemale} />
				<h1>Kobiety</h1>
			</div>
			<div>
				<FontAwesomeIcon className="icon" icon={faTshirt} />
				<h1>Odzież</h1>
			</div>
			<div>
				<FontAwesomeIcon className="icon" icon={faShoePrints} />
				<h1>Obuwie</h1>
			</div>
			<div>
				<FontAwesomeIcon className="icon" icon={faGlasses} />
				<h1>Akcesoria</h1>
			</div>
			<div className="tag">
				<FontAwesomeIcon className="icon" icon={faTag} />
				<h1>Marki</h1>
			</div>
		</div>
	);
}

export default Categories;