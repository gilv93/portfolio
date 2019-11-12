import React from 'react'
import './styles/buttons.scss'

const Buttons = ({ titles, category, click }) => {

	const sections = () => {
		return (
			titles.map((title) => <div className='button' id={title} key={title} onClick={click} tabIndex='0'><p>{title}</p></div>)
		)
	}

	return (
		<div className='buttons-container'>
			{sections()}
		</div>
	)
}

export default Buttons