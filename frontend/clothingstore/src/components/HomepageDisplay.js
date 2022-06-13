import React from 'react';

import Categories from './Categories';
import InterestingOffers from './InterestingOffers';
import NewItem from './NewItem';

function HomepageDisplay({ classNone, apiUrl }) {
	return (
		<React.Fragment>
			<Categories classNone={classNone} />
			<NewItem classNone={classNone} />
			<InterestingOffers classNone={classNone} apiUrl={apiUrl} />
		</React.Fragment>
	);
}

export default HomepageDisplay;
