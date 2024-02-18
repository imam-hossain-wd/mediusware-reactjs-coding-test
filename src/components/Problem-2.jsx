import React, { useEffect, useState } from 'react';
import CustomModal from './Modal';
import { useDataContext } from '../DataContext/DataContext';



function Problem2() {
    const {  contacts:data,
        handleShowModalA,
        handleShowModalB,
        handleCloseModal, 
        showModalA,
        showModalB,
        onlyEven,
        handleToggleEven
    } = useDataContext();

    const contacts = data
    console.log(contacts, 'contacts');
  
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={handleShowModalA}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={handleShowModalB}>US Contacts</button>
                </div>
            </div>
            
            <CustomModal
                show={showModalA}
                onHide={handleCloseModal}
                title="Modal A"
                onShowModalA={handleShowModalA}
                onShowModalB={handleShowModalB}
                handleToggleEven={handleToggleEven}
                onlyEven={onlyEven}
            >


                {contacts.map(contact => (
                    <div key={contact.id}>
                        <p>{contact.id} - {contact.phone}</p>
                    </div>
                ))}
            </CustomModal>

            <CustomModal
                show={showModalB}
                onHide={handleCloseModal}
                title="Modal B"
                onShowModalA={handleShowModalA}
                onShowModalB={handleShowModalB}
            >


                {contacts.map(contact => (
                    <div key={contact.id}>
                        <p>{contact.id} - {contact.phone}</p>
                    </div>
                ))}
            </CustomModal>
        </div>
    );
}

export default Problem2;

