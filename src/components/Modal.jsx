
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function CustomModal({ show, onHide, title, children, onShowModalA, onShowModalB }) {
    return (
        <Modal
        size="lg"
        show={show}
        onHide={onHide}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton={false}> 
          <div className="d-flex justify-content-center w-100">
            <Button className='m-2' variant="primary" onClick={onShowModalA}>All Contacts</Button> 
            <Button className='m-2' variant="warning" onClick={onShowModalB}>US Contacts</Button>
            <Button className='m-2' variant="secondary" onClick={onHide}>Close</Button>
          </div>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
    );
  }
