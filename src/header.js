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
		let num = 1
		const select = (event) => {
			if (event.animationName === 'typing') { 
				const check = () => {
					if (num < names.length) {
						let newText = names[num]
						name.innerText = newText
						num += 1
					}
					else {
						num = 0
						check()
					}
				}
				check()
			}
			else {
				{}
			}
		}
		name.addEventListener('animationiteration', (e) => select(e))
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