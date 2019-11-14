import React from 'react'
import './styles/text.scss'
import About from './about'
import Projects from './projects'
import Contact from './contact'


const Text = ({ category }) => {

	return (
		<div className='text'>
			<About />
			<Projects />
			<Contact />
			<div className='default' id='default-sec'>
				<h1>Let's make a website together.</h1>
			</div>
		</div>
	)
}

export default Text