import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Homepage from './components/Homepage';

function App() {
	const [ classFullscreen, setClassFullscreen ] = useState('');

	return (
		<div className={`App ${classFullscreen}`}>
			<Router>
				<Homepage setClassFullscreen={setClassFullscreen} />
			</Router>
		</div>
	);
}

export default App;
