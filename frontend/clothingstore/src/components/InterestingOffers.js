import React, { useState, useEffect } from 'react';

import useFetch from '../hooks/useFetch';

import '../style/mobile/InterestingOffers.css';

import { faDizzy, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, useParams } from 'react-router-dom';

function InterestingOffers({ classNone }) {
	const apiUrl = 'https://strapi-clothingstore.herokuapp.com';
	const { loading, error, data } = useFetch(`${apiUrl}/products`);

	const { nameSub = 'sub' } = useParams();
	const { nameSize = 'size' } = useParams();
	const { nameBrand = 'brand' } = useParams();
	const { nameColor = 'color' } = useParams();
	const { nameDetail = 'detail' } = useParams();
	const { sort = 'ByNewest' } = useParams();

	const [ shift, setshift ] = useState(0);
	const [ classLeft, setclassLeft ] = useState('');
	const [ classRight, setclassRight ] = useState('');

	useEffect(
		() => {
			if (shift === 0) {
				setclassLeft('none');
			} else if (shift !== 0) {
				setclassLeft('');
			}

			if (shift < -5200) {
				setclassRight('none');
			} else if (shift >= -5200) {
				setclassRight('');
			}
		},
		[ shift ]
	);

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

	const productShift = {
		transform: `translateX(${shift}px)`
	};

	return (
		<div className={`interestingOffers ${classNone}`}>
			<h1>Najciekawsze oferty</h1>
			<h1>Przedmioty wybrane dla Ciebie</h1>
			<Link to="/allproducts/sub/size/brand/color/detail/ByNewest" className="linkTO">
				Zobacz więcej -&gt;
			</Link>
			<div className="allProducts interestingOffersAllProducts">
				{data
					.sort((a, b) => Date.parse(b.published_at) - Date.parse(a.published_at))
					.slice(0, 24)
					.map((product) => (
						<div key={product.id} className={`product`} style={productShift}>
							<Link
								to={`/allproducts/${nameSub}/${nameSize}/${nameBrand}/${nameColor}/${nameDetail}/${sort}/${product.id}`}
							>
								<div className="image">
									<img src={apiUrl + product.photos[0].url} alt="product" />
								</div>
								<div className="hover" />
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
										<div className="sizes">
											{product.sizes
												.slice(0, 10)
												.sort((a, b) => a.id - b.id)
												.map((size) => <span key={size.id}>{size.name}</span>)}
										</div>
										<h1 className="color">KOLORY</h1>
										<div className="colors">
											{product.colors.map((color) => <span key={color.id}>{color.name}</span>)}
										</div>
										{/* <button>WIĘCEJ SZCZEGÓŁÓW</button> */}
									</div>
								</div>
							</Link>
						</div>
					))}
			</div>
			<FontAwesomeIcon
				className={`icon left ${classLeft}`}
				icon={faChevronLeft}
				onClick={() => setshift(shift + 1300)}
			/>
			<FontAwesomeIcon
				className={`icon right ${classRight}`}
				icon={faChevronRight}
				onClick={() => setshift(shift + -1300)}
			/>
		</div>
	);
}

export default InterestingOffers;
