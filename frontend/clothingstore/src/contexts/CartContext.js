import { createContext, useReducer, useContext } from 'react';
import { cartReducer } from './CartReducer';

const Cart = createContext();

function CartContext({ children }) {
	const [ state, dispatch ] = useReducer(cartReducer, {
		cart: []
	});

	return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}
export default CartContext;

export const CartState = () => {
	return useContext(Cart);
};
