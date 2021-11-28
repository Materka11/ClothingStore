import React from 'react';

import '../style/mobile/NewsletterMobile.css';

function Newsletter({ classNone }) {
	return (
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
					Sprawdź naszą Politykę Prywatności i dowiedz się, w jaki sposób przetwarzamy dane. W każdej chwili
					możesz przerwać subskrybcję newslettera za darmo.
				</p>
			</div>
		</div>
	);
}

export default Newsletter;
