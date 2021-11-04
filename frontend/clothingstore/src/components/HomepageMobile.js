import React, { useState } from 'react';
import '../style/mobile/HomepageMobile.css';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faShoppingCart,
	faPlus,
	faSearch,
	faChevronLeft,
	faTh,
	faMale,
	faFemale,
	faTshirt,
	faShoePrints,
	faGlasses,
	faTag
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import newItem from '../img/wethenew-sneakers-france-adidas-yeezy-cloud-white-reflective-1_2000x0.png';

export function HomepageMobile() {
	//useState on search
	const [ hasButtonBeenClicked, setHasButtonBeenClicked ] = useState(false);
	//variables class
	let classInput = 'input';
	let classNone = '';
	let classLeftIcon = 'none';

	if (hasButtonBeenClicked) {
		classInput += ' input-active';
		classNone = 'none';
		classLeftIcon = '';
	} else {
		classInput = 'input';
		classNone = '';
		classLeftIcon = 'none';
	}

	return (
		<div className="page">
			<div className={`header ${classNone}`}>
				<img src={logo} alt="logo" />
				<div>
					<FontAwesomeIcon className="icon" icon={faPlus} />
					<FontAwesomeIcon className="icon" icon={faShoppingCart} />
					<FontAwesomeIcon className="icon" icon={faUser} />
				</div>
			</div>
			<div className="inputDiv">
				<FontAwesomeIcon
					className={`icon left ${classLeftIcon}`}
					icon={faChevronLeft}
					onClick={() => setHasButtonBeenClicked(false)}
				/>
				<input
					type="text"
					placeholder="Szukaj..."
					className={classInput}
					onClick={() => setHasButtonBeenClicked(true)}
				/>
				<FontAwesomeIcon className="icon right" icon={faSearch} />
			</div>
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
			<div className={`newItem ${classNone}`}>
				<div>
					<h1>Nowe przdmioty</h1>
					<h1>Nowości już w sklepie</h1>
					<h3 className="linkTO">Odkryj teraz -&gt;</h3>
					<img src={newItem} alt="Nowy przedmiot" />
				</div>
			</div>
			<div className={`interestingOffers ${classNone}`}>
				<h1>Najciekawsze oferty</h1>
				<h1>Przedmioty wybrane dla Ciebie</h1>
				<h3 className="linkTO">Zobacz więcej -&gt;</h3>
				<div />
			</div>
			<div className={`newsletter ${classNone}`}>
				<h1>Zapisz się do newslettera</h1>
				<h2>Zarejestruj się i bądź na bieżąco z nowościami i okazjami</h2>
				<div>
					<label>Twój adres e-mail</label>
					<input type="text" />
					<h1>Zarządzaj preferencjami</h1>
					<h1>Co najbardziej Cię interesuje?</h1>
					<label className="radio">
						<input type="radio" name="fashion" />
						<span />
						<h2>Moda damska</h2>
					</label>
					<label className="radio">
						<input type="radio" name="fashion" />
						<span />
						<h2>Moda męska</h2>
					</label>

					<button>Zapisz mnie</button>
					<p>
						Sprawdź naszą Politykę Prywatności i dowiedz się, w jaki sposób przetwarzamy dane. W każdej
						chwili możesz przerwać subskrybcję newslettera za darmo.
					</p>
				</div>
			</div>
			<div className={`footer ${classNone}`}>
				<img src={logo} alt="logo" />
				<h1>Dołącz do nas</h1>
				<div>
					<FontAwesomeIcon className="icon" icon={faFacebook} />
					<FontAwesomeIcon className="icon" icon={faInstagram} />
					<FontAwesomeIcon className="icon" icon={faTwitter} />
				</div>
			</div>
		</div>
	);
}
