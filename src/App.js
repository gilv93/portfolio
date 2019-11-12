import React, { useState } from 'react';
import './styles/App.scss';
import Header from './header'
import Buttons from './buttons'
import Text from './text'

const App = () => {

	const [category, setCategory] = useState('')

	const titles = [
		'About Me',
		'Projects',
		'Contact Me'
	]

	const change = (e) => {
		try {
			document.getElementById(category).className='button'
		}
		catch {
			{}
		}
		setCategory(e.target.id)
		e.target.className='active'
	}

	return (
		<div className="app">
			<div className='premiere'>
				<Header />
				<hr></hr>
				<Buttons category={category} titles={titles} click={change} />
			</div>
			<Text category={category} />
		</div>
	);
}

export default App;
