import React, { useState, useEffect } from 'react';
import { CartState } from '../contexts/CartContext';

import '../style/mobile/Cartpage.css';

import InterestingOffers from './InterestingOffers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Cartpage({ classNone }) {
	const apiUrl = 'http://192.168.8.106:1337';
	const { state, dispatch } = CartState();

	const [ defaultQuantity, setdefaultQuantity ] = useState(1);

	// const handleChange = (event) => {
	// 	event.preventDefault();
	// 	setdefaultQuantity(event.target.value);
	// };

	return (
		<div className={classNone}>
			<div className={state.cart.length === 0 ? 'display padding' : 'display gray'}>
				{state.cart.length === 0 ? (
					<React.Fragment>
						<h1>Kosz jest pusty</h1>
						<button className="logIn ">
							<span>Zaloguj się</span>
						</button>
						<Link to="/homepage" className="signUp">
							<span>Kontynuuj zakupy</span>
						</Link>
					</React.Fragment>
				) : (
					<div className="productsDisplay">
						{state.cart.map((product) => {
							return (
								<div key={product.id} className="singleProductDisplay">
									<div className="left">
										<img src={apiUrl + product.photos[0].url} alt="product" />
									</div>
									<div className="right">
										<div>
											<h1>{product.brand.name}</h1>
											<h2>
												{product.subcategories[0].name} - {product.colors[0].name}
											</h2>
											<h2>Rozmiar: {product.sizes.map((size) => size[0].name)}</h2>

											<div>
												<h2>Ilość:</h2>
												<FontAwesomeIcon
													className="icon left"
													icon={faCaretLeft}
													onClick={() => {
														setdefaultQuantity(defaultQuantity - 1);
													}}
												/>
												<div>
													<h3>{defaultQuantity}</h3>
												</div>
												{/* tu jest blad */}
												<FontAwesomeIcon
													className="icon right"
													icon={faCaretRight}
													onClick={() => {
														setdefaultQuantity(defaultQuantity + 1);
													}}
												/>
												{/* <input
													type="text"
													maxLength="2"
													onKeyPress={(event) => {
														if (!/[0-9]/.test(event.key)) {
															event.preventDefault();
														}
													}}
													value={defaultQuantity}
													onChange={handleChange}
												/> */}
											</div>
										</div>
										<FontAwesomeIcon
											onClick={() =>
												dispatch({
													type: 'REMOVE_FROM_CART',
													payload: product
												})}
											className="icon"
											icon={faTrash}
										/>
										<h3>{product.price},00 zł</h3>
									</div>
								</div>
							);
						})}

						<div className="buttonDisplay">
							<button className="logIn ">
								<span>Przejdź do kasy</span>
							</button>
						</div>
					</div>
				)}
			</div>

			<InterestingOffers />
		</div>
	);
}

export default Cartpage;
