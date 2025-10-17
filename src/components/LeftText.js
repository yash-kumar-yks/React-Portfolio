import React from 'react'
import Typed from 'react-typed'

function LeftText() {
	return (
		<div className='leftText'>
			<div className='flex-fix'>
				<h2>Hi, </h2>
				<span className='preTitle'>I am </span>
				<h1 className='name_big'>Yash Kumar Singh</h1>
				<p className='animated_text'>
					<Typed
						strings={[
							'I am an Engineer',
							'I am a Java Developer',
							'I like to create new applications for fun',
							'I am a Athlete',
						]}
						typeSpeed={40}
						backSpeed={50}
						loop
					></Typed>
				</p>
			</div>
		</div>
	)
}

export default LeftText
