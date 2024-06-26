import {Modal} from 'react-bootstrap'
import React from 'react'
import YashCV from '../Downloadables/YashCV.pdf'
function ResumeModal({showResumeModal, closeModal}) {
	return (
		<Modal
			size='lg'
			show={showResumeModal}
			onHide={closeModal}
			aria-labelledby='example-modal-sizes-title-lg'
		>
	
			<Modal.Header closeButton>
				<Modal.Title id='example-modal-sizes-title-lg'>CV</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<iframe
					title='Resume'
					src={YashCV}
					width='100%'
					height='700px'
					frameBorder='0'
				></iframe>
			</Modal.Body>
		</Modal>
	)
}

export default ResumeModal
