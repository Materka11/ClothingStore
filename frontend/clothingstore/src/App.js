import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Homepage from './components/Homepage';

function App() {
	return (
		<div className="App">
			<Router>
				<Homepage />
			</Router>
		</div>
	);
}

export default App;
