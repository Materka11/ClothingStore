import React, { useEffect, useState } from 'react';

import { faChevronDown, faLongArrowAltLeft, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faDizzy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useFetch from '../hooks/useFetch';

import '../style/mobile/AllProductsMobile.css';

import { Link, useParams } from 'react-router-dom';

function AllProducts({ classNone, setClassFullscreen }) {
	const apiUrl = 'http://192.168.8.107:1337';
	const { loading, error, data } = useFetch(`${apiUrl}/products`);
	const sizes = useFetch(`${apiUrl}/sizes`);
	const brands = useFetch(`${apiUrl}/brands`);
	const colors = useFetch(`${apiUrl}/colors`);
	const details = useFetch(`${apiUrl}/details`);

	const { productsCategory } = useParams();
	const { nameSub = 'sub' } = useParams();
	const { nameSize = 'size' } = useParams();
	const { nameBrand = 'brand' } = useParams();
	const { nameColor = 'color' } = useParams();
	const { nameDetail = 'detail' } = useParams();
	const { sort = 'ByNewest' } = useParams();

	const [ isToggled, setIsToggled ] = useState(false);
	const [ classNoneBorderBotton, setClassNoneBorderBotton ] = useState('');
	const [ icon, setIcon ] = useState(faChevronDown);
	const [ classNoneSort, setclassNoneSort ] = useState('none');

	// const [ sortOption, setSortOption ] = useState('');

	const [ classFiltr, setClassFiltr ] = useState('');

	const [ productsFilter, setProductsFilter ] = useState([]);
	const [ subcategoriesFilter, setSubcategoriesFilter ] = useState([]);
	const [ sizesFilter, setSizesFilter ] = useState([]);
	const [ brandsFilter, setBrandsFilter ] = useState([]);
	const [ colorsFilter, setColorsFilter ] = useState([]);
	const [ detailsFilter, setDetailsFilter ] = useState([]);

	const [ isthereSize, setIsthereSize ] = useState('');
	const [ isthereBrand, setIsthereBrand ] = useState('');
	const [ isthereColor, setIsthereColor ] = useState('');
	const [ isthereDetail, setIsthereDetail ] = useState('');
	const [ wordWynik, setWordWynik ] = useState('wyników');
	const [ onClickButtonResult, setOnClickButtonResult ] = useState('');

	const [ products, setproducts ] = useState([]);

	//filter productscategory
	useEffect(
		() => {
			if (data != null) {
				if (productsCategory === 'allproducts') {
					setproducts(data);
				} else if (productsCategory === 'menproducts') {
					const filteredProducts = [];
					data.map((product) => {
						return product.categories.map((categorie) => {
							if (categorie.name === 'Mężczyźni') {
								filteredProducts.push(product);
							}
						});
					});
					setproducts(filteredProducts);
				} else if (productsCategory === 'womenproducts') {
					const filteredProducts = [];
					data.map((product) => {
						return product.categories.map((categorie) => {
							if (categorie.name === 'Kobiety') {
								filteredProducts.push(product);
							}
						});
					});
					setproducts(filteredProducts);
				} else if (productsCategory === 'clothesproducts') {
					const filteredProducts = [];
					data.map((product) => {
						return product.categories.map((categorie) => {
							if (categorie.name === 'Odzież') {
								filteredProducts.push(product);
							}
						});
					});
					setproducts(filteredProducts);
				} else if (productsCategory === 'footwearproducts') {
					const filteredProducts = [];
					data.map((product) => {
						return product.categories.map((categorie) => {
							if (categorie.name === 'Obuwie') {
								filteredProducts.push(product);
							}
						});
					});
					setproducts(filteredProducts);
				} else if (productsCategory === 'accessoriesproducts') {
					const filteredProducts = [];
					data.map((product) => {
						return product.categories.map((categorie) => {
							if (categorie.name === 'Akcesoria') {
								filteredProducts.push(product);
							}
						});
					});
					setproducts(filteredProducts);
				}
			}
		},
		[ productsCategory, data ]
	);

	console.log(products);
	console.log(data);
	//filter products
	//satisfying moment 3
	useEffect(
		() => {
			const data = [].concat(subcategoriesFilter, sizesFilter, brandsFilter, colorsFilter, detailsFilter);

			//return only same id
			const filteredOnlySameId = subcategoriesFilter.filter((obj1) =>
				sizesFilter.find((obj2) => obj1.id === obj2.id)
			);

			const filteredOnlySameId2 = subcategoriesFilter.filter((obj1) =>
				brandsFilter.find((obj2) => obj1.id === obj2.id)
			);

			const filteredOnlySameId3 = subcategoriesFilter.filter((obj1) =>
				colorsFilter.find((obj2) => obj1.id === obj2.id)
			);

			const filteredOnlySameId4 = subcategoriesFilter.filter((obj1) =>
				detailsFilter.find((obj2) => obj1.id === obj2.id)
			);

			//remove same id
			const filteredSameID = data.filter(
				(element, index, array) => array.findIndex((e) => e.id === element.id) === index
			);

			if (
				filteredOnlySameId == 0 &&
				filteredOnlySameId2 == 0 &&
				filteredOnlySameId3 == 0 &&
				filteredOnlySameId4 == 0
			) {
				setProductsFilter(filteredSameID);
			}

			if (filteredOnlySameId != 0) {
				setProductsFilter(filteredOnlySameId);
			}

			if (filteredOnlySameId2 != 0) {
				setProductsFilter(filteredOnlySameId2);
			}

			if (filteredOnlySameId3 != 0) {
				setProductsFilter(filteredOnlySameId3);
			}

			if (filteredOnlySameId4 != 0) {
				setProductsFilter(filteredOnlySameId4);
			}
		},
		[ subcategoriesFilter, sizesFilter, brandsFilter, colorsFilter, detailsFilter ]
	);

	// change word in result button in filter
	useEffect(
		() => {
			if (productsFilter.length >= 5) {
				setWordWynik('wyników');
				setOnClickButtonResult('onClickButtonResult');
			} else if (productsFilter.length == 1) {
				setWordWynik('wynik');
				setOnClickButtonResult('onClickButtonResult');
			} else if (productsFilter.length == 0) {
				setWordWynik('wyników');
			} else {
				setWordWynik('wyniki');
				setOnClickButtonResult('onClickButtonResult');
			}
		},
		[ productsFilter ]
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

		if (sort === 'ByNewest') {
			sortData = SortDataByNewest;
		} else if (sort === 'ByCheapest') {
			sortData = SortDataByCheapest;
		} else if (sort === 'ByExpensive') {
			sortData = SortDataByExpensive;
		}

		return sortData;
	};

	//subcategories filter
	//satisfying moment 4
	useEffect(
		() => {
			if (changeSortData(products) != null) {
				const filteredData = changeSortData(products)
					.map((product) => {
						if (product != null) {
							const filteredSub = product.subcategories.filter((sub) => sub.name === nameSub);
							return filteredSub.map((e) => {
								if (product.subcategories[0].name === e.name) {
									return product;
								}
							});
						}
					})
					.map((product) => {
						if (product != null) {
							if (product.length != 0) {
								return product;
							}
						}
					})
					.filter((e) => e)
					.flat(Infinity) //zamienienie na plaska tablice
					.filter((e) => e !== undefined);

				setSubcategoriesFilter(filteredData);
			}
		},
		[ nameSub, loading ]
	);

	//sizes filter
	useEffect(
		() => {
			if (productsFilter == 0 && changeSortData(products) != null) {
				const sortData = changeSortData(products)
					.map((product) => {
						if (product != null) {
							return product.sizes.map((siz) => {
								if (siz.name === nameSize) {
									return product;
								}
								return null;
							});
						}
					})
					.map((product) => {
						if (product !== undefined) {
							return product.filter((e) => e !== null);
						}
					})
					.map((product) => {
						if (product !== undefined) {
							return product[0];
						}
					})
					.filter((e) => e !== undefined);

				setIsthereSize('');
				setSizesFilter(sortData);
			} else if (changeSortData(productsFilter) != null) {
				const sortData = changeSortData(productsFilter)
					.map((product) => {
						if (product != null) {
							return product.sizes.map((siz) => {
								if (siz.name === nameSize) {
									return product;
								}
								return null;
							});
						}
					})
					.map((product) => {
						if (product !== undefined) {
							return product.filter((e) => e !== null);
						}
					})
					.map((product) => {
						if (product !== undefined) {
							return product[0];
						}
					})
					.filter((e) => e !== undefined);

				setSizesFilter(sortData);

				if (sortData.length === 0) {
					setIsthereSize('Niestety nie posiadamy takiego rozmiaru');
				} else if (sortData.length !== 0) {
					setIsthereSize('');
				}
			}
		},
		[ nameSize, loading ]
	);

	//brands filter
	useEffect(
		() => {
			if (productsFilter == 0 && changeSortData(products) != null) {
				const sortData = changeSortData(products)
					.map((product) => {
						if (product != null) {
							if (product.brand.name === nameBrand) {
								return product;
							}
							return null;
						}
					})
					.filter((e) => e !== null)
					.filter((e) => e !== undefined);

				setIsthereBrand('');
				setBrandsFilter(sortData);
			} else if (changeSortData(productsFilter) != null) {
				const sortData = changeSortData(productsFilter)
					.map((product) => {
						if (product != null) {
							if (product.brand.name === nameBrand) {
								return product;
							}
							return null;
						}
					})
					.filter((e) => e !== null)
					.filter((e) => e !== undefined);

				setBrandsFilter(sortData);

				if (sortData.length == 0) {
					setIsthereBrand('Niestety nie posiadamy takiej marki');
				} else if (sortData.length !== 0) {
					setIsthereBrand('');
				}
			}
		},
		[ nameBrand, loading ]
	);

	//color filter
	useEffect(
		() => {
			if (productsFilter == 0 && changeSortData(products) != null) {
				const sortData = changeSortData(products)
					.map((product) => {
						if (product != null) {
							return product.colors.map((color) => {
								if (color.name === nameColor) {
									return product;
								}
								return null;
							});
						}
					})
					.map((product) => {
						if (product !== undefined) {
							return product.filter((e) => e !== null);
						}
					})
					.map((product) => {
						if (product !== undefined) {
							return product[0];
						}
					})
					.filter((e) => e !== undefined);

				setIsthereColor('');
				setColorsFilter(sortData);
			} else if (changeSortData(productsFilter) != null) {
				const sortData = changeSortData(productsFilter)
					.map((product) => {
						if (product != null) {
							return product.colors.map((color) => {
								if (color.name === nameColor) {
									return product;
								}
								return null;
							});
						}
					})
					.map((product) => {
						if (product !== undefined) {
							return product.filter((e) => e !== null);
						}
					})
					.map((product) => {
						if (product !== undefined) {
							return product[0];
						}
					})
					.filter((e) => e !== undefined);

				setColorsFilter(sortData);

				if (sortData.length == 0) {
					setIsthereColor('Niestety nie posiadamy takiego koloru');
				} else if (sortData.length !== 0) {
					setIsthereColor('');
				}
			}
		},
		[ nameColor, loading ]
	);

	//detail filter
	useEffect(
		() => {
			if (productsFilter == 0 && changeSortData(products) != null) {
				const sortData = changeSortData(products)
					.map((product) => {
						if (product != null) {
							return product.details.map((detail) => {
								if (detail.name === nameDetail) {
									return product;
								}
								return null;
							});
						}
					})
					.map((product) => {
						if (product !== undefined) {
							return product.filter((e) => e !== null);
						}
					})
					.map((product) => {
						if (product !== undefined) {
							return product[0];
						}
					})
					.filter((e) => e !== undefined);

				setIsthereDetail('');
				setDetailsFilter(sortData);
			} else if (changeSortData(productsFilter) != null) {
				const sortData = changeSortData(productsFilter)
					.map((product) => {
						if (product != null) {
							return product.details.map((detail) => {
								if (detail.name === nameDetail) {
									return product;
								}
								return null;
							});
						}
					})
					.map((product) => {
						if (product !== undefined) {
							return product.filter((e) => e !== null);
						}
					})
					.map((product) => {
						if (product !== undefined) {
							return product[0];
						}
					})
					.filter((e) => e !== undefined);

				setDetailsFilter(sortData);

				if (sortData.length == 0) {
					setIsthereDetail('Niestety żaden produkt nie ma takich szczegółów');
				} else if (sortData.length !== 0) {
					setIsthereDetail('');
				}
			}
		},
		[ nameDetail, loading ]
	);

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

	//subcategories remove duplicates name
	function removeDuplicatesSubcategories(data) {
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

	const handleClickSortButton = (sortOption) => {
		setclassNoneSort('none');
		setClassNoneBorderBotton('');
		setIcon(faChevronDown);
		setIsToggled(false);
		// setSortOption(sort);
	};

	//filter button
	const handleClickFiltr = () => {
		setClassFullscreen('fullscreen');
		setClassFiltr('filtrDivVisible');
	};

	//filter products subcategories
	const filterSubcategories = (sub) => {
		setSizesFilter([]);
		setBrandsFilter([]);
		setColorsFilter([]);
		setDetailsFilter([]);
		setIsthereBrand('');
		setIsthereSize('');
		setIsthereColor('');
		setIsthereDetail('');
		// const filteredData = changeSortData(data).filter((product) => product.subcategories[0].name === sub);
		// setSubcategoriesFilter(filteredData);
	};

	//filter products sizes
	//satisfying moment 2
	// const filterSizes = (size) => {
	// 	if (productsFilter == 0) {
	// 		const sortData = changeSortData(data).map((product) => {
	// 			return product.sizes.map((siz) => {
	// 				if (siz.name === size) {
	// 					return product;
	// 				}
	// 				return null;
	// 			});
	// 		});
	// 		const filteredSortData = sortData.map((data) => {
	// 			return data.filter((e) => e != null);
	// 		});
	// 		const AssignData = filteredSortData.map((data) => {
	// 			return data[0];
	// 		});
	// 		const resultData = AssignData.filter((e) => e != null);
	// 		console.log(resultData);
	// 		setSizesFilter(resultData);
	// 		setIsthereSize('');
	// 	} else {
	// 		const sortData = changeSortData(productsFilter).map((product) => {
	// 			return product.sizes.map((siz) => {
	// 				if (siz.name === size) {
	// 					return product;
	// 				}
	// 				return null;
	// 			});
	// 		});
	// 		const filteredSortData = sortData.map((data) => {
	// 			return data.filter((e) => e != null);
	// 		});
	// 		const AssignData = filteredSortData.map((data) => {
	// 			return data[0];
	// 		});
	// 		const resultData = AssignData.filter((e) => e != null);
	// 		setSizesFilter(resultData);
	// 		if (resultData.length == 0) {
	// 			setIsthereSize('Niestety nie posiadamy takiego rozmiaru');
	// 		} else if (resultData.length !== 0) {
	// 			setIsthereSize('');
	// 		}
	// 	}
	// };

	//filter products brands
	// const filterBrands = (brand) => {
	// 	if (productsFilter == 0) {
	// 		const sortData = changeSortData(data).map((product) => {
	// 			if (product.brand.name === brand) {
	// 				return product;
	// 			}
	// 			return null;
	// 		});

	// 		const resultData = sortData.filter((e) => e != null);

	// 		setBrandsFilter(resultData);
	// 		setIsthereBrand('');
	// 	} else {
	// 		const sortData = changeSortData(productsFilter).map((product) => {
	// 			if (product.brand.name === brand) {
	// 				return product;
	// 			}
	// 			return null;
	// 		});

	// 		const resultData = sortData.filter((e) => e != null);
	// 		setBrandsFilter(resultData);
	// 		if (resultData.length == 0) {
	// 			setIsthereBrand('Niestety nie posiadamy takiej marki');
	// 		} else if (resultData.length !== 0) {
	// 			setIsthereBrand('');
	// 		}
	// 	}
	// };

	//filter products colors
	// const filterColors = (color) => {
	// 	if (productsFilter == 0) {
	// 		const sortData = changeSortData(data).map((product) => {
	// 			return product.colors.map((colo) => {
	// 				if (colo.name === color) {
	// 					return product;
	// 				}
	// 				return null;
	// 			});
	// 		});

	// 		const filteredSortData = sortData.map((data) => {
	// 			return data.filter((e) => e != null);
	// 		});

	// 		const AssignData = filteredSortData.map((data) => {
	// 			return data[0];
	// 		});

	// 		const resultData = AssignData.filter((e) => e != null);

	// 		setColorsFilter(resultData);
	// 		setIsthereColor('');
	// 	} else {
	// 		const sortData = changeSortData(productsFilter).map((product) => {
	// 			return product.colors.map((colo) => {
	// 				if (colo.name === color) {
	// 					return product;
	// 				}
	// 				return null;
	// 			});
	// 		});

	// 		const filteredSortData = sortData.map((data) => {
	// 			return data.filter((e) => e != null);
	// 		});

	// 		const AssignData = filteredSortData.map((data) => {
	// 			return data[0];
	// 		});

	// 		const resultData = AssignData.filter((e) => e != null);

	// 		setColorsFilter(resultData);
	// 		if (resultData.length == 0) {
	// 			setIsthereColor('Niestety nie posiadamy takiego koloru');
	// 		} else if (resultData.length !== 0) {
	// 			setIsthereColor('');
	// 		}
	// 	}
	// };

	//filter products details
	// const filterDetails = (detail) => {
	// 	if (productsFilter == 0) {
	// 		const sortData = changeSortData(data).map((product) => {
	// 			return product.details.map((detai) => {
	// 				if (detai.name === detail) {
	// 					return product;
	// 				}
	// 				return null;
	// 			});
	// 		});

	// 		const filteredSortData = sortData.map((data) => {
	// 			return data.filter((e) => e != null);
	// 		});

	// 		const AssignData = filteredSortData.map((data) => {
	// 			return data[0];
	// 		});

	// 		const resultData = AssignData.filter((e) => e != null);

	// 		setDetailsFilter(resultData);
	// 		setIsthereDetail('');
	// 	} else {
	// 		const sortData = changeSortData(productsFilter).map((product) => {
	// 			return product.details.map((detai) => {
	// 				if (detai.name === detail) {
	// 					return product;
	// 				}
	// 				return null;
	// 			});
	// 		});

	// 		const filteredSortData = sortData.map((data) => {
	// 			return data.filter((e) => e != null);
	// 		});

	// 		const AssignData = filteredSortData.map((data) => {
	// 			return data[0];
	// 		});

	// 		const resultData = AssignData.filter((e) => e != null);

	// 		setDetailsFilter(resultData);
	// 		if (resultData.length == 0) {
	// 			setIsthereDetail('Niestety żaden produkt nie ma takich szczegółów');
	// 		} else if (resultData.length !== 0) {
	// 			setIsthereDetail('');
	// 		}
	// 	}
	// };

	const handleResultButton = () => {
		if (productsFilter.length != 0) {
			setClassFiltr('filtrDivInvisible');
			setClassFullscreen('');
		} else {
		}
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
		<React.Fragment>
			<div className={`filtrDiv ${classFiltr}`}>
				<div className="filtrTitle">
					<button
						className="x"
						onClick={() => {
							// setSizesFilter([]);
							// setBrandsFilter([]);
							// setColorsFilter([]);
							// setDetailsFilter([]);
							// setOnClickButtonResult('');
							setClassFiltr('filtrDivInvisible');
							setClassFullscreen('');
							setIsthereBrand('');
							setIsthereSize('');
							setIsthereColor('');
							setIsthereDetail('');
						}}
					/>
					<div>
						<h1>Filtr</h1>
						<button
							onClick={() => {
								setSizesFilter([]);
								setBrandsFilter([]);
								setColorsFilter([]);
								setDetailsFilter([]);
								setIsthereBrand('');
								setIsthereSize('');
								setIsthereColor('');
								setIsthereDetail('');
							}}
						>
							Wyczyść
						</button>
					</div>
				</div>
				<div className="filtrDisplay">
					<h1>Rozmiar</h1>
					{/* instrukcja trojwarunkowe if do loading sizes */}
					<div className="displayElement">
						{sizes.loading === true ? (
							''
						) : (
							sizes.data.map((size) => {
								return (
									<Link
										to={`/${productsCategory}/${nameSub}/${size.name}/${nameBrand}/${nameColor}/${nameDetail}/${sort}`}
										key={size.id}
										// onClick={filterSizes.bind(this, size.name)}
									>
										<span>{size.name}</span>
									</Link>
								);
							})
						)}
					</div>
					<div>
						<h1>{isthereSize}</h1>
					</div>
				</div>
				<div className="filtrDisplay">
					<h1>Marki</h1>
					<div className="displayElement">
						{brands.loading === true ? (
							''
						) : (
							brands.data.map((brand) => {
								return (
									<Link
										to={`/${productsCategory}/${nameSub}/${nameSize}/${brand.name}/${nameColor}/${nameDetail}/${sort}`}
										key={brand.id}
										// onClick={filterBrands.bind(this, brand.name)}
									>
										<span>{brand.name}</span>
									</Link>
								);
							})
						)}
					</div>
					<div>
						<h1>{isthereBrand}</h1>
					</div>
				</div>
				<div className="filtrDisplay">
					<h1>Kolory</h1>
					<div className="displayElement">
						{colors.loading === true ? (
							''
						) : (
							colors.data.map((color) => {
								return (
									<Link
										to={`/${productsCategory}/${nameSub}/${nameSize}/${nameBrand}/${color.name}/${nameDetail}/${sort}`}
										key={color.id}
										// onClick={filterColors.bind(this, color.name)}
									>
										<span>{color.name}</span>
									</Link>
								);
							})
						)}
					</div>
					<div>
						<h1>{isthereColor}</h1>
					</div>
				</div>
				<div className="filtrDisplay">
					<h1>Szczegóły</h1>
					<div className="displayElement">
						{details.loading === true ? (
							''
						) : (
							details.data.map((detail) => {
								return (
									<Link
										to={`/${productsCategory}/${nameSub}/${nameSize}/${nameBrand}/${nameColor}/${detail.name}/${sort}`}
										key={detail.id}
										// onClick={filterDetails.bind(this, detail.name)}
										style={{ padding: '0 110px' }}
									>
										<span style={{ width: '200px', fontSize: '.750rem' }}>{detail.name}</span>
									</Link>
								);
							})
						)}
					</div>
					<div>
						<h1>{isthereDetail}</h1>
					</div>
				</div>
				<button className={`resultButton ${onClickButtonResult}`} onClick={handleResultButton}>
					<span>{`Pokaż ${productsFilter.length} ${wordWynik}`}</span>
				</button>
			</div>
			<div className={`items ${classNone}`}>
				<div className="upSubcategories">
					<div>
						<Link to="/homepage">
							<FontAwesomeIcon className="icon" icon={faLongArrowAltLeft} />
						</Link>
						<button onClick={handleClickFiltr}>Filtr</button>
					</div>
					<Link to={`/${productsCategory}/sub/size/brand/color/detail/ByNewest`} className="titleCategorie">
						<h1>Wszystko</h1>
					</Link>
				</div>
				<div className="subcategories">
					{//satisfying moment 1
					//subcategories display
					removeDuplicatesSubcategories(products).map((product) => {
						return product.subcategories
							.filter((a) => product.subcategories.indexOf(a) === 0)
							.map((subcategorie) => {
								return (
									<Link
										to={`/${productsCategory}/${subcategorie.name}/${nameSize}/${nameBrand}/${nameColor}/${nameDetail}/${sort}`}
										onClick={filterSubcategories.bind(this, subcategorie.name)}
										key={subcategorie.id}
									>
										<span>{subcategorie.name}</span>
									</Link>
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
						<Link
							to={`/${productsCategory}/${nameSub}/${nameSize}/${nameBrand}/${nameColor}/${nameDetail}/ByNewest`}
							className={sort === 'ByNewest' ? 'ByNewest' : ''}
							onClick={handleClickSortButton}
						>
							Nowości
						</Link>
						<Link
							to={`/${productsCategory}/${nameSub}/${nameSize}/${nameBrand}/${nameColor}/${nameDetail}/ByCheapest`}
							className={sort === 'ByCheapest' ? 'ByCheapest' : ''}
							onClick={handleClickSortButton}
						>
							Najniższa cena
						</Link>
						<Link
							to={`/${productsCategory}/${nameSub}/${nameSize}/${nameBrand}/${nameColor}/${nameDetail}/ByExpensive`}
							className={sort === 'ByExpensive' ? 'ByExpensive' : ''}
							onClick={handleClickSortButton}
						>
							Najwyższa cena
						</Link>
						<div />
					</div>
				</div>
				<div className="allProducts">
					{productsFilter.length !== 0 ? (
						changeSortData(productsFilter).map((product) => (
							<div key={product.id} className="product">
								<Link to={`${product.id}`}>
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
						))
					) : (
						changeSortData(products).map((product) => (
							<div key={product.id} className="product">
								<Link to={`${product.id}`}>
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
						))
					)}
				</div>
			</div>
		</React.Fragment>
	);
}
export default AllProducts;
