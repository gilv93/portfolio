import React from 'react'
import './styles/buttons.scss'

const Buttons = () => {

	const titles = [
		'About Me',
		'Projects',
		'Contact Me'
	]

	const sections = () => {
		return (
			titles.map((title) => <div className='button' key={title} tabindex="0"><p>{title}</p></div>)
		)
	}

	return (
		<div className='buttons-container'>
			{sections()}
		</div>
	)
}

export default Buttons