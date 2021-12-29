import React, { useState } from 'react';

import { faChevronDown, faLongArrowAltLeft, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faDizzy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useFetch from '../hooks/useFetch';

import '../style/mobile/AllProductsMobile.css';

import { Link } from 'react-router-dom';

function AllProducts({ classNone }) {
	const { loading, error, data } = useFetch('http://192.168.8.106:1337/products');
	const apiUrl = 'http://192.168.8.106:1337';

	const [ isToggled, setIsToggled ] = useState(false);
	const [ classNoneBorderBotton, setClassNoneBorderBotton ] = useState('');
	const [ icon, setIcon ] = useState(faChevronDown);
	const [ classNoneSort, setclassNoneSort ] = useState('none');

	const [ productsFilter, setProductsFilter ] = useState([]);

	const [ sortOption, setSortOption ] = useState('ByNewest');

	// const [ productsSort, setproductsSort ] = useState([]);

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

	//sort data
	const changeSortData = (data) => {
		// //0 - nowosci, 1 - najnizsza cena, 2 - najwyzsza cena - 3
		// let sortOptions = 0;

		let sortData = [];

		//sort products by popular
		// const SortDataByPopular = [].concat(data).sort((a, b) => b.popular - a.popular);

		//sort products by newest
		const SortDataByNewest = []
			.concat(data)
			.sort((a, b) => Date.parse(b.published_at) - Date.parse(a.published_at));

		//sort products by cheapest
		const SortDataByCheapest = [].concat(data).sort((a, b) => a.price - b.price);

		//sort products by most expensive
		const SortDataByExpensive = [].concat(data).sort((a, b) => b.price - a.price);

		if (sortOption === 'ByNewest') {
			sortData = SortDataByNewest;
		} else if (sortOption === 'ByCheapest') {
			sortData = SortDataByCheapest;
		} else if (sortOption === 'ByExpensive') {
			sortData = SortDataByExpensive;
		}

		return sortData;
	};

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
			setProductsFilter(changeSortData(data));

			return;
		}

		const filteredData = changeSortData(data).filter((product) => product.subcategories[0].name === sub);
		setProductsFilter(filteredData);
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
					<button
						className={sortOption === 'ByNewest' ? 'ByNewest' : ''}
						onClick={() => setSortOption('ByNewest')}
					>
						Nowości
					</button>
					<button
						className={sortOption === 'ByCheapest' ? 'ByCheapest' : ''}
						onClick={() => setSortOption('ByCheapest')}
					>
						Najniższa cena
					</button>
					<button
						className={sortOption === 'ByExpensive' ? 'ByExpensive' : ''}
						onClick={() => setSortOption('ByExpensive')}
					>
						Najwyższa cena
					</button>
					<div />
				</div>
			</div>
			<div className="allProducts">
				{productsFilter.length !== 0 ? (
					productsFilter.map((product) => (
						<div key={product.id} className="product">
							<button>
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
					changeSortData(data).map((product) => (
						<div key={product.id} className="product">
							<button>
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
