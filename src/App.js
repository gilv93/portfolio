import React from 'react';
import './styles/App.scss';
import Header from './header'
import Buttons from './buttons'
import Text from './text'

const App = () => {

	return (
		<div className="app">
			<div className='premiere'>
				<Header />
				<hr></hr>
				<Buttons />
			</div>
			<Text />
		</div>
	);
}

export default App;
