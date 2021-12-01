import React, { useState } from 'react';

import { faChevronDown, faLongArrowAltLeft, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useFetch from '../hooks/useFetch';

import '../style/mobile/AllProductsMobile.css';

function AllProducts({ classNone }) {
	const { loading, error, data } = useFetch('http://192.168.8.107:1337/products');
	const apiUrl = 'http://192.168.8.107:1337';

	const [ isToggled, setisToggled ] = useState(false);
	const [ classNoneBorderBotton, setClassNoneBorderBotton ] = useState('');
	const [ icon, setIcon ] = useState(faChevronDown);
	const [ classNoneSort, setclassNoneSort ] = useState('none');

	if (loading) return <h1>loading...</h1>;
	if (error) return <h1>Error...</h1>;

	function removeDuplicates(data) {
		const newArray = [];
		const lookupObject = {};

		for (let i in data) {
			lookupObject[data[i].subcategories[0].id] = data[i];
		}

		for (let i in lookupObject) {
			newArray.push(lookupObject[i]);
		}

		return newArray;
	}

	const handleClickSort = () => {
		if (!isToggled) {
			setClassNoneBorderBotton('noneBorderBotton');
			setIcon(faChevronUp);
			setclassNoneSort('');
			setisToggled(true);
		} else {
			setClassNoneBorderBotton('');
			setIcon(faChevronDown);
			setclassNoneSort('none');
			setisToggled(false);
		}
	};

	return (
		<div className={`items ${classNone}`}>
			<div className="upSubcategories">
				<div>
					<FontAwesomeIcon className="icon" icon={faLongArrowAltLeft} />
					<h2>Filtr</h2>
				</div>
				<h1>Wszystko</h1>
			</div>
			<div className="subcategories">
				{removeDuplicates(data).map((product) => {
					return product.subcategories
						.filter((a) => product.subcategories.indexOf(a) === 0)
						.map((subcategorie) => {
							return (
								<button key={subcategorie.id}>
									<span>{subcategorie.name}</span>
								</button>
							);
						});
				})}
			</div>
			<div className={'sortDiv'}>
				<button className={`sort ${classNoneBorderBotton}`} onClick={handleClickSort}>
					<span>Sortuj</span>
					<FontAwesomeIcon className="icon" icon={icon} />
				</button>
				<div className={classNoneSort}>
					<span>Popularność</span>
					<span>Nowości</span>
					<span>Najniższa cena</span>
					<span>Najwyższa cena</span>
					<div />
				</div>
			</div>
			<div className="allProducts">
				{data.map((product) => (
					<div key={product.id} className="product">
						<div className="image">
							<img src={apiUrl + product.photos[0].url} alt="product image" />
						</div>
						<div className="backgroundPurple">{/* background purple */}</div>
						<div className="productStats">
							<h1>{product.brand.name}</h1>
							<h2>{product.subcategories[0].name}</h2>
							<span>{product.price} zł</span>
							<div className="productOptions">
								<h1>ROZMIARY</h1>
								{product.sizes.map((size) => <span key={size.id}>{size.name}</span>)}
								<h1>KOLORY</h1>
								{product.colors.map((color) => <span key={color.id}>{color.name}</span>)}
								<button>WIĘCEJ SZCZEGÓŁÓW</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default AllProducts;

// {product.subcategories
// 	.filter((a, b) => product.subcategories.indexOf(a) === b)
// .map((subcategorie) => {
// 	return <button key={subcategorie.id}>{subcategorie.name}</button>;
// })}
//final.indexOf(e) === i && i

// {product.subcategories.map((subcategorie) => {
// 	return [ ...new Set(subcategorie.name) ];
// })}
//{Array.from(new Set(product.subcategories.map(JSON.stringify))).map(JSON.parse)}
