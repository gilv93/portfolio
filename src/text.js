import React, { useState, useEffect } from 'react'
import './styles/text.scss'
import About from './about'
import Projects from './projects'


const Text = ({ category, active }) => {

	/*const textShow = () => {
		if (category === 'About Me') {
			return (
				<About />
			)
		}
		else {
			return (
				<div className='default'>
						<h1 id='default'>Let's make a website together.</h1>
				</div>
			)
		}
	}*/


	return (
		<div className='text'>
			<About />
			<Projects />
			<div className='default' id='default-sec'>
				<h1>Let's make a website together.</h1>
			</div>
		</div>
	)
}

export default Text