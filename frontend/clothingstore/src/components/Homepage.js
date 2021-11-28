import React, { useState } from 'react';

import '../style/mobile/HeaderMobile.css';

import Newsletter from './Newsletter';
import Footer from './Footer';
import NewItem from './NewItem';
import InterestingOffers from './InterestingOffers';
import Categories from './Categories';
import Header from './Header';

function Homepage() {
	//useState on input and icon
	const [ hasButtonBeenClicked, setHasButtonBeenClicked ] = useState(false);
	const [ classNone, setClassNone ] = useState('');
	const [ classInput, setClassInput ] = useState('input');
	const [ classLeftIcon, setClassLeftIcon ] = useState('none');
	//inputDiv {border: none}
	const [ classNoneBorder, setClassNoneBorder ] = useState('');

	//toggle class
	const handleClickInput = () => {
		setHasButtonBeenClicked(true);
		setClassNone('none');
		setClassInput('input-active');
		setClassLeftIcon('');
		setClassNoneBorder('noneBorder');
	};

	const handleClickBack = () => {
		setHasButtonBeenClicked(false);
		setClassNone('');
		setClassInput('input');
		setClassLeftIcon('none');
		setClassNoneBorder('');
	};
	return (
		<React.Fragment>
			<Header
				classNone={classNone}
				classInput={classInput}
				classNoneBorder={classNoneBorder}
				classLeftIcon={classLeftIcon}
				handleClickInput={handleClickInput}
				handleClickBack={handleClickBack}
			/>
			<Categories classNone={classNone} />
			<NewItem classNone={classNone} />
			<InterestingOffers classNone={classNone} />
			<Newsletter classNone={classNone} />
			<Footer classNone={classNone} />
		</React.Fragment>
	);
}
export default Homepage;
