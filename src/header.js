import React, { useEffect } from 'react'
import './styles/header.scss'

const Header = () => {

	const names = [
		'Gilbert Velazquez',
		'Gil',
		'Gilb\u00e9',
		'Gilly',
		'Gilby',
		'G.'
	]

	useEffect(() => {
		const name = document.getElementById('name')
		let previous = ''
		const random = () => {
			return names[Math.round(Math.random()*(names.length-1))]
		}
		const randomize = (event) => {
			if (event.animationName === 'typing') { 
				const check = () => {
					let newText = random()
					if (newText != previous) {
						name.innerText = newText
						previous = newText
					}
					else {
						check()
					}
				}
				check()
			}
			else {
				{}
			}
		}
		name.addEventListener('animationiteration', (e) => randomize(e))
	}, [])

	return (
		<div className='header'>
			<p>Hello! My name is</p>
			<span><h1 id='name'>Gilbert Velazquez</h1></span>
			<h2>Aspiring Front-End Developer</h2>
		</div>
	)
}

export default Header