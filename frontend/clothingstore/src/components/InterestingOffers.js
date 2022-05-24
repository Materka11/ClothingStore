import React from 'react';

import useFetch from '../hooks/useFetch';

import '../style/mobile/InterestingOffers.css';

import { faDizzy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, useParams } from 'react-router-dom';

function InterestingOffers({ classNone }) {
	const apiUrl = 'http://192.168.8.107:1337';
	const { loading, error, data } = useFetch(`${apiUrl}/products`);

	const { nameSub = 'sub' } = useParams();
	const { nameSize = 'size' } = useParams();
	const { nameBrand = 'brand' } = useParams();
	const { nameColor = 'color' } = useParams();
	const { nameDetail = 'detail' } = useParams();
	const { sort = 'ByNewest' } = useParams();

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
		<div className={`interestingOffers ${classNone}`}>
			<h1>Najciekawsze oferty</h1>
			<h1>Przedmioty wybrane dla Ciebie</h1>
			<Link to="/allproducts/sub/size/brand/color/detail/ByNewest" className="linkTO">
				Zobacz więcej -&gt;
			</Link>
			<div className="allProducts">
				{data.sort((a, b) => Date.parse(b.published_at) - Date.parse(a.published_at)).map((product) => (
					<div key={product.id} className="product">
						<Link
							to={`/allproducts/${nameSub}/${nameSize}/${nameBrand}/${nameColor}/${nameDetail}/${sort}/${product.id}`}
						>
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
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default InterestingOffers;
