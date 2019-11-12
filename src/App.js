import React from 'react';
import './styles/App.scss';
import Header from './header'
import Buttons from './buttons'
import Text from './text'

const App = () => {

	return (
		<div className="app">
			<Header />
			<hr></hr>
			<Buttons />
			<Text />
		</div>
	);
}

export default App;
