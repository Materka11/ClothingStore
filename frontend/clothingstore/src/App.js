import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Homepage from './components/Homepage';
import ScrollToTop from './components/ScrollToTop';
import CartContext from './contexts/CartContext';

function App() {
	const [ classFullscreen, setClassFullscreen ] = useState('');

	return (
		<div className={`App ${classFullscreen}`}>
			<Router>
				<ScrollToTop />
				<CartContext>
					<Homepage setClassFullscreen={setClassFullscreen} />
				</CartContext>
			</Router>
		</div>
	);
}

export default App;
