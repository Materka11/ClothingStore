import React from 'react';

import Categories from './Categories';
import InterestingOffers from './InterestingOffers';
import NewItem from './NewItem';

function HomepageDisplay({ classNone }) {
	return (
		<React.Fragment>
			<Categories classNone={classNone} />
			<NewItem classNone={classNone} />
			<InterestingOffers classNone={classNone} />
		</React.Fragment>
	);
}

export default HomepageDisplay;
