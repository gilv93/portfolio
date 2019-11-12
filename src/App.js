import React, { useState, useEffect, useRef } from 'react';
import './styles/App.scss';
import Header from './header'
import Buttons from './buttons'
import Text from './text'

const App = () => {

	const [category, setCategory] = useState('default')

	const titles = [
		'About Me',
		'Projects',
		'Contact Me'
	]

/*	useEffect(() => {
		try {
			document.getElementById(category + '-sec').style.right = '100vw'
			document.getElementById(category + '-sec').style.transform = 'translateX(150vw)'
		}
		catch {
			{}
		}
	}, [category])*/

	const change = (e) => {
		try {
			document.getElementById(category + '-sec').classList.toggle('active')
			document.getElementById(category).className='button'
		}
		catch {
			{}
		}
/*		if (category === 'default') {
			document.getElementById('app-sec').style.overflowY='visible'
		}*/
		setCategory(e.target.id)
		e.target.className='active'
		document.getElementById(e.target.id + '-sec').classList.toggle('active')
	}

	return (
		<div className='app' id='app-sec'>
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
