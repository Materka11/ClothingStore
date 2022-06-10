import React, { useState } from 'react';

import logo from '../logo.png';

import '../style/mobile/HeaderMobile.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShoppingCart, faUser, faChevronLeft, faSearch, faDizzy } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import { CartState } from '../contexts/CartContext';

import useFetch from '../hooks/useFetch';

function Header({
	classNone,
	classInput,
	classNoneBorder,
	classLeftIcon,
	handleClickBack,
	handleClickInput,
	classSearchDiv
}) {
	const { state } = CartState();

	const apiUrl = 'http://192.168.8.102:1337';
	const { loading, error, data } = useFetch(`${apiUrl}/products`);

	const [ searchTerm, setSearchTerm ] = useState('');

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
			<div className={`header ${classNone}`}>
				<Link className="link" to="/homepage">
					<img src={logo} alt="logo" />
				</Link>
				<div>
					<FontAwesomeIcon className="icon" icon={faPlus} />
					<Link to="/cartpage">
						<FontAwesomeIcon className="icon" icon={faShoppingCart} />
						{state.cart.length === 0 ? <span className="none" /> : <span>{state.cart.length}</span>}
					</Link>
					<FontAwesomeIcon className="icon" icon={faUser} />
				</div>
			</div>
			<div className={`inputDiv ${classNoneBorder}`}>
				<FontAwesomeIcon
					className={`icon left ${classLeftIcon}`}
					icon={faChevronLeft}
					onClick={handleClickBack}
				/>
				<input
					type="text"
					placeholder="Szukaj..."
					className={`input ${classInput}`}
					onClick={handleClickInput}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<FontAwesomeIcon className="icon right" icon={faSearch} />
			</div>
			<div className={`allProducts ${classSearchDiv} inHeader`}>
				{data
					.filter((e) => {
						if (searchTerm === '') {
							return null;
						} else if (
							e.brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
							e.subcategories[0].name.toLowerCase().includes(searchTerm.toLowerCase())
						) {
							return e;
						}
					})
					.map((product) => {
						return (
							<div key={product.id} className="product">
								<Link
									to={`/allproducts/sub/size/brand/color/detail/ByNewest/${product.id}`}
									onClick={handleClickBack}
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
												{product.colors.map((color) => (
													<span key={color.id}>{color.name}</span>
												))}
											</div>
											{/* <button>WIĘCEJ SZCZEGÓŁÓW</button> */}
										</div>
									</div>
								</Link>
							</div>
						);
					})}
			</div>
		</React.Fragment>
	);
}

export default Header;
