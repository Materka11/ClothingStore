import React from 'react';

import '../style/mobile/FooterMobile.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import logo from '../logo.png';

function Footer({ classNone }) {
	return (
		<div className={`footer ${classNone}`}>
			<img src={logo} alt="logo" />
			<h1>Dołącz do nas</h1>
			<div>
				<FontAwesomeIcon className="icon" icon={faFacebook} />
				<FontAwesomeIcon className="icon" icon={faInstagram} />
				<FontAwesomeIcon className="icon" icon={faTwitter} />
			</div>
		</div>
	);
}

export default Footer;
