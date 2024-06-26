import { Button, Nav, Navbar } from 'react-bootstrap'
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'
import React, { useState } from 'react'

import PortfolioLogo from '../assets/Image/logo.svg'
import loadable from '@loadable/component'

const ResumeModal = loadable(() => import('./ResumeModal'))
// import ResumeModal from "./ResumeModal";

function Navigation() {
	const [showResumeModal, setShowResumeModal] = useState(false)
	const handleClick=()=>{
		setShowResumeModal(true);
	}
	return (
		<React.Fragment>
			<Navbar variant='dark' expand='lg' fixed='top' className='nvabar-custon'>
				<a href='/' className='navbar_logo_container'>
					<img src={PortfolioLogo} className='navbar_logo' alt='navbar_logo' />
					<span>Yash Kumar Singh</span>
				</a>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'></Nav>
					<Nav className='navbar-right'>
						
						
						<Nav.Link
							aria-label='Github'
							href='https://github.com/yash-kumar-yks'
						>
							<FaGithub
								aria-label='Github'
								color='rgba(255,255,255,0.8)'
								size='1.5em'
							/>
						</Nav.Link>
						<Nav.Link
							aria-label='Linked In'
							href='https://www.linkedin.com/in/yashkumar-singh/'
						>
							<FaLinkedin
								aria-label='Linked In'
								color='rgba(255,255,255,0.8)'
								size='1.5em'
							/>
						</Nav.Link>
						<Button onClick={handleClick} style={{marginLeft:"5px", marginRight:"5px"}}>Resume</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<ResumeModal
				showResumeModal={showResumeModal}
				closeModal={() => {
					setShowResumeModal(!showResumeModal)
				}}
				/>
				
			
		</React.Fragment>
	)
}

export default Navigation
