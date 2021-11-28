import React, { useState } from 'react';

import AllProducts from './AllProducts';
import Footer from './Footer';
import Header from './Header';
import Newsletter from './Newsletter';

function Sellpage() {
	//useState on input and icon
	const [ hasButtonBeenClicked, setHasButtonBeenClicked ] = useState(false);
	const [ classNone, setClassNone ] = useState('');
	const [ classInput, setClassInput ] = useState('input');
	const [ classLeftIcon, setClassLeftIcon ] = useState('none');
	//inputDiv {border: none}
	const [ classNoneBorder, setClassNoneBorder ] = useState('');

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
				handleClickBack={handleClickBack}
				handleClickInput={handleClickInput}
			/>
			<AllProducts classNone={classNone} />
			<Newsletter classNone={classNone} />
			<Footer classNone={classNone} />
		</React.Fragment>
	);
}

export default Sellpage;
