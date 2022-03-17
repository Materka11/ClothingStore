import React from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../hooks/useFetch';

import '../style/mobile/DetailsProduct.css';

import { faDizzy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DetailsProduct() {
	const apiUrl = 'http://192.168.8.106:1337';
	const { id } = useParams();
	const { loading, error, data } = useFetch(`${apiUrl}/products/${id}`);

	if (loading)
		return (
			<div className="ldsRoller">
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		);
	if (error)
		return (
			<div className="error">
				<h1>Error...</h1>
				<FontAwesomeIcon className="icon" icon={faDizzy} />
			</div>
		);

	return (
		<React.Fragment>
			<div className="slider">
				{data.photos.map((img) => {
					return <img className="slide" src={apiUrl + img.url} alt="product" />;
				})}
			</div>
		</React.Fragment>
	);
}

export default DetailsProduct;
