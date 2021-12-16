import React, { useState } from 'react';

import { faChevronDown, faLongArrowAltLeft, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faDizzy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useFetch from '../hooks/useFetch';

import '../style/mobile/AllProductsMobile.css';

import { Link } from 'react-router-dom';

function AllProducts({ classNone }) {
	const { loading, error, data } = useFetch('http://192.168.8.105:1337/products');
	const apiUrl = 'http://192.168.8.105:1337';

	const [ isToggled, setIsToggled ] = useState(false);
	const [ classNoneBorderBotton, setClassNoneBorderBotton ] = useState('');
	const [ icon, setIcon ] = useState(faChevronDown);
	const [ classNoneSort, setclassNoneSort ] = useState('none');

	const [ productsFilter, setproductsFilter ] = useState([]);

	// const [ isFocus, setIsFocus ] = useState(false);
	// const [ classPurpleBG, setclassPurpleBG ] = useState('none');
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

	//sort products by popular
	const SortDataByPopular = [].concat(data).sort((a, b) => b.popular - a.popular);
	console.log(SortDataByPopular);
	//subcategories
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

	//sort
	const handleClickSort = () => {
		if (!isToggled) {
			setClassNoneBorderBotton('noneBorderBotton');
			setIcon(faChevronUp);
			setclassNoneSort('');
			setIsToggled(true);
		} else {
			setClassNoneBorderBotton('');
			setIcon(faChevronDown);
			setclassNoneSort('none');
			setIsToggled(false);
		}
	};

	//filter products
	const filterProducts = (sub) => {
		if (sub === sub.name) {
			setproductsFilter(SortDataByPopular);

			return;
		}

		const filteredData = SortDataByPopular.filter((product) => product.subcategories[0].name === sub);
		setproductsFilter(filteredData);
	};

	//products
	// const handleClickfocus = () => {
	// 	if (!isFocus) {
	// 		setIsFocus(true);
	// 		setclassPurpleBG('');
	// 	} else {
	// 		setIsFocus(false);
	// 		setclassPurpleBG('none');
	// 	}
	// };

	return (
		<div className={`items ${classNone}`}>
			<div className="upSubcategories">
				<div>
					<Link to="/homepage">
						<FontAwesomeIcon className="icon" icon={faLongArrowAltLeft} />
					</Link>
					<h2>Filtr</h2>
				</div>
				<button onClick={() => window.location.reload()}>
					<h1>Wszystko</h1>
				</button>
			</div>
			<div className="subcategories">
				{removeDuplicates(data).map((product) => {
					return product.subcategories
						.filter((a) => product.subcategories.indexOf(a) === 0)
						.map((subcategorie) => {
							return (
								<button onClick={filterProducts.bind(this, subcategorie.name)} key={subcategorie.id}>
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
					<span>
						<b>Popularność</b>
					</span>
					<span>Nowości</span>
					<span>Najniższa cena</span>
					<span>Najwyższa cena</span>
					<div />
				</div>
			</div>
			<div className="allProducts">
				{productsFilter.length !== 0 ? (
					productsFilter.map((product) => (
						<div key={product.id} className="product">
							<button onClick={() => data.popular + 1}>
								<div className="image">
									<img src={apiUrl + product.photos[0].url} alt="product" />
								</div>
								<div className={`backgroundPurple`}>{/* background purple */}</div>
								<div className="productStats">
									<div>
										<h1>{product.brand.name}</h1>
									</div>
									<div>
										<h2>{product.subcategories[0].name}</h2>
									</div>
									<span>{product.price} zł</span>
									<div className="productOptions">
										<h1>ROZMIARY</h1>
										{product.sizes.map((size) => <span key={size.id}>{size.name}</span>)}
										<h1>KOLORY</h1>
										{product.colors.map((color) => <span key={color.id}>{color.name}</span>)}
										{/* <button>WIĘCEJ SZCZEGÓŁÓW</button> */}
									</div>
								</div>
							</button>
						</div>
					))
				) : (
					SortDataByPopular.map((product) => (
						<div key={product.id} className="product">
							<button onClick={() => data.popular + 1}>
								<div className="image">
									<img src={apiUrl + product.photos[0].url} alt="product" />
								</div>
								<div className={`backgroundPurple`}>{/* background purple */}</div>
								<div className="productStats">
									<div>
										<h1>{product.brand.name}</h1>
									</div>
									<div>
										<h2>{product.subcategories[0].name}</h2>
									</div>
									<span>{product.price} zł</span>
									<div className="productOptions">
										<h1>ROZMIARY</h1>
										{product.sizes.map((size) => <span key={size.id}>{size.name}</span>)}
										<h1>KOLORY</h1>
										{product.colors.map((color) => <span key={color.id}>{color.name}</span>)}
										{/* <button>WIĘCEJ SZCZEGÓŁÓW</button> */}
									</div>
								</div>
							</button>
						</div>
					))
				)}
			</div>
		</div>
	);
}
export default AllProducts;
