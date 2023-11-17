import React from 'react';
import Homepage from './Pages/Homepage';
import NavBar from './Component/NavBar';
import Announcement from './Component/Announcement';
import Slider from './Component/Slider';

const App = () => {
	return (
		<div>
			{/* <Homepage /> */}
			<Announcement />
			<NavBar />
			<Slider />
		</div>
	);
};

export default App;
