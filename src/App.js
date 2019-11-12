import React, { useState, useEffect } from 'react';
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
		if (category != '') {
			document.getElementById(category).className='button'
			document.getElementById(category + '-sec').style.right = '100vw'
			document.getElementById(category + '-sec').style.transform = 'translateX(100vw)'
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
