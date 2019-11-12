import React from 'react'
import './styles/text.scss'
import About from './about'


const Text = ({ category }) => {

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

	const textShow = () => {
		if (category === '') {
			return (
			<div className='default'>
				<h1 id='default'>Let's make a website together.</h1>
			</div>
			)
		}
		else {
			{}
		}
	}

	return (
		<div className='text'>
			<About category={category} />
			{textShow()}
		</div>
	)
}

export default Text