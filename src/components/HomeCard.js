import {GiBookshelf, GiThorHammer} from 'react-icons/gi'
import React, {useState} from 'react'

import {Col} from 'react-bootstrap'
import {DiJavascript1} from 'react-icons/di'
import {FaGuitar} from 'react-icons/fa'
import {GoRepo} from 'react-icons/go'
import HomeModal from './HomeModal'
import {TiSocialAtCircular} from 'react-icons/ti'

function seticon(iconName, size) {
	if (iconName === 'FaGuitar') return <FaGuitar color='#fff' size={size} />
	else if (iconName === 'GiBookshelf')
		return <GiBookshelf color='#fff' size={size} />
	else if (iconName === 'GiThorHammer')
		return <GiThorHammer color='#fff' size={size} />
	else if (iconName === 'DiJavascript1')
		return <DiJavascript1 color='#fff' size={size} />
	else if (iconName === 'GoRepo') return <GoRepo color='#fff' size={size} />
	else if (iconName === 'TiSocialAtCircular')
		return <TiSocialAtCircular color='#fff' size={size} />
}

function HomeCard({HomeCards}) {
	const [lgShow, setLgShow] = useState(false)

	return (
		<React.Fragment>
			<Col className='ColStyle' xs={6} md={4}>
				<div className='innerCol'>
					<span onClick={() => setLgShow(true)} className='projectLink'>
						<div
							style={{
								background:
									`linear-gradient(120deg,` +
									HomeCards.initialColor +
									`,` +
									HomeCards.finalColor +
									`)`,
							}}
							className='innerColImg'
						>
							<p className='projectTitle'>{HomeCards.title}</p>
							<div className='iconHolder'>
								{seticon(HomeCards.icon, '50px')}
							</div>
						</div>
					</span>
				</div>
			</Col>
			<HomeModal lgShow={lgShow} setLgShow={setLgShow} HomeCards={HomeCards} />
		</React.Fragment>
	)
}

export default HomeCard
