import React, { useState } from 'react';

import '../style/mobile/HeaderMobile.css';

import Newsletter from './Newsletter';
import Footer from './Footer';
import Header from './Header';
import HomepageDisplay from './HomepageDisplay';

import { Routes, Route, Navigate } from 'react-router-dom';
import AllProducts from './AllProducts';
import DetailsProduct from './DetailsProduct';

function Homepage({ setClassFullscreen }) {
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
			<Routes>
				<Route path="homepage" element={<HomepageDisplay classNone={classNone} />} />
				<Route
					path="allproducts/sub/size/brand/color/detail/ByNewest"
					element={<AllProducts classNone={classNone} setClassFullscreen={setClassFullscreen} />}
				/>
				<Route
					path="allproducts/:nameSub"
					exact={true}
					element={<AllProducts classNone={classNone} setClassFullscreen={setClassFullscreen} />}
				/>
				<Route
					path="allproducts/:nameSub/:nameSize"
					exact={true}
					element={<AllProducts classNone={classNone} setClassFullscreen={setClassFullscreen} />}
				/>
				<Route
					path="allproducts/:nameSub/:nameSize/:nameBrand"
					exact={true}
					element={<AllProducts classNone={classNone} setClassFullscreen={setClassFullscreen} />}
				/>
				<Route
					path="allproducts/:nameSub/:nameSize/:nameBrand/:nameColor"
					exact={true}
					element={<AllProducts classNone={classNone} setClassFullscreen={setClassFullscreen} />}
				/>
				<Route
					path="allproducts/:nameSub/:nameSize/:nameBrand/:nameColor/:nameDetail"
					exact={true}
					element={<AllProducts classNone={classNone} setClassFullscreen={setClassFullscreen} />}
				/>
				<Route
					path="allproducts/:nameSub/:nameSize/:nameBrand/:nameColor/:nameDetail/:sort"
					exact={true}
					element={<AllProducts classNone={classNone} setClassFullscreen={setClassFullscreen} />}
				/>
				<Route
					path="allproducts/:nameSub/:nameSize/:nameBrand/:nameColor/:nameDetail/:sort/:id"
					element={<DetailsProduct />}
				/>
				<Route path="/" element={<Navigate replace to="homepage" />} />
			</Routes>
			<Newsletter classNone={classNone} />
			<Footer classNone={classNone} />
		</React.Fragment>
	);
}
export default Homepage;
