import React from 'react';

import logo from '../logo.png';

import '../style/mobile/HeaderMobile.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShoppingCart, faUser, faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons';

function Header({ classNone, classInput, classNoneBorder, classLeftIcon, handleClickBack, handleClickInput }) {
	return (
		<React.Fragment>
			<div className={`header ${classNone}`}>
				<img src={logo} alt="logo" />
				<div>
					<FontAwesomeIcon className="icon" icon={faPlus} />
					<FontAwesomeIcon className="icon" icon={faShoppingCart} />
					<FontAwesomeIcon className="icon" icon={faUser} />
				</div>
			</div>
			<div className={`inputDiv ${classNoneBorder}`}>
				<FontAwesomeIcon
					className={`icon left ${classLeftIcon}`}
					icon={faChevronLeft}
					onClick={handleClickBack}
				/>
				<input
					type="text"
					placeholder="Szukaj..."
					className={`input ${classInput}`}
					onClick={handleClickInput}
				/>
				<FontAwesomeIcon className="icon right" icon={faSearch} />
			</div>
		</React.Fragment>
	);
}

export default Header;
