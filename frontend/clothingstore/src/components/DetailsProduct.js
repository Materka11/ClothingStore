import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../hooks/useFetch';

import '../style/mobile/DetailsProduct.css';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faDizzy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import InterestingOffers from './InterestingOffers';
import { CartState } from '../contexts/CartContext';

function DetailsProduct({ classNone }) {
	const apiUrl = 'http://192.168.8.106:1337';
	const { id } = useParams();
	const { loading, error, data } = useFetch(`${apiUrl}/products/${id}`);

	const [ icon, setIcon ] = useState(faChevronDown);
	const [ isToggled, setIsToggled ] = useState(false);
	const [ classSize, setclassSize ] = useState('');
	const [ sizeTitle, setsizeTitle ] = useState('Wybierz rozmiar');

	const [ productInCart, setproductInCart ] = useState(false);

	const [ completeProduct, setcompleteProduct ] = useState([]);
	const [ selectedSize, setselectedSize ] = useState([]);

	const { state, dispatch } = CartState();

	const [ shift, setShift ] = useState(0);

	const [ iconDetails, setIconDetails ] = useState(faChevronDown);
	const [ isToggledDetails, setIsToggledDetails ] = useState(false);
	const [ classDetails, setclassDetails ] = useState('');

	useEffect(
		() => {
			setShift(0);
			setselectedSize([]);
			setsizeTitle('Wybierz rozmiar');
		},
		[ id ]
	);

	useEffect(
		() => {
			state.cart.map((product) => {
				if (product.id == id) {
					setproductInCart(true);
				} else if (product.id !== id) {
					setproductInCart(false);
				}
			});
		},
		[ state.cart, id ]
	);

	useEffect(
		() => {
			if (data !== null) {
				const filteredSize = data.sizes.filter((size) => size.id === selectedSize.id);

				setcompleteProduct({ ...data, sizes: [ filteredSize ] });
			}
		},
		[ selectedSize ]
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

	const imageShift = {
		transform: `translateX(${shift}px)`
	};

	const handleClickSelectSize = () => {
		if (!isToggled) {
			setIcon(faChevronUp);
			setclassSize('classSize');
			setIsToggled(true);
		} else {
			setIcon(faChevronDown);
			setclassSize('');
			setIsToggled(false);
		}
	};

	const handleClickHide = () => {
		if (isToggled) {
			setIcon(faChevronDown);
			setclassSize('');
			setIsToggled(false);
		}
	};

	const handleClickSize = (size) => {
		if (isToggled) {
			setIcon(faChevronDown);
			setclassSize('');
			setIsToggled(false);
			setsizeTitle(size.name);
			setselectedSize(size);
		}
	};

	const handleClickDetails = () => {
		if (!isToggledDetails) {
			setIconDetails(faChevronUp);
			setclassDetails('classDetails');
			setIsToggledDetails(true);
		} else {
			setIconDetails(faChevronDown);
			setclassDetails('');
			setIsToggledDetails(false);
		}
	};

	return (
		<div className={classNone}>
			<div className="desktopView">
				<div>
					<div className="slider">
						{data.photos.map((img) => {
							return (
								<img
									key={img.id}
									className="slide"
									src={apiUrl + img.url}
									alt="product"
									style={imageShift}
								/>
							);
						})}
					</div>
					<div className="desktopPhotos">
						{data.photos.map((img) => {
							return (
								<img
									key={img.id}
									src={apiUrl + img.url}
									alt="product"
									onClick={() => setShift(data.photos.indexOf(img) * -400)}
								/>
							);
						})}
					</div>
				</div>
				<div className="description">
					<h2>{data.brand.name}</h2>
					<h1>{`${data.subcategories[0].name} - ${data.colors[0].name}`}</h1>
					<h2>{`Od ${data.price},00 zł`}</h2>
					<div className="selectSize">
						<button className="selectSizeButton" onClick={handleClickSelectSize}>
							<span>{sizeTitle}</span>
							<FontAwesomeIcon className="icon" icon={icon} />
						</button>
						<div className={classSize}>
							<span className="title">Rozmiar</span>
							<button className="x" onClick={handleClickHide} />

							{data.sizes.map((size) => {
								return (
									<button
										key={size.id}
										className="sizeButton"
										onClick={handleClickSize.bind(this, size)}
									>
										<span>{size.name}</span>
									</button>
								);
							})}
						</div>
					</div>
					{productInCart === true || selectedSize.length === 0 ? (
						<button className="cart actived">
							<span>Dodaj do koszyka</span>
						</button>
					) : (
						<button
							onClick={() => {
								setselectedSize([]);
								setsizeTitle('Wybierz rozmiar');
								dispatch({
									type: 'ADD_TO_CART',
									payload: completeProduct
								});
							}}
							className="cart"
						>
							<span>Dodaj do koszyka</span>
						</button>
					)}
				</div>
				<div className="details">
					<h1 onClick={handleClickDetails}>Szczegóły produktu</h1>
					<FontAwesomeIcon className="icon" icon={iconDetails} onClick={handleClickDetails} />
					<div className={classDetails}>
						{data.details.map((detail) => {
							return <h2 key={detail.id}>{detail.name}</h2>;
						})}
					</div>
				</div>
			</div>
			<InterestingOffers />
		</div>
	);
}

export default DetailsProduct;
