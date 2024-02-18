import React, { useState } from 'react';
import CustomModal from './Modal';
import { useDataContext } from '../DataContext/DataContext';

function Problem2() {
    const {contacts, page, setPage, searchQuery, setSearchQuery, pageCount } = useDataContext();

    const [showModalA, setShowModalA] = useState(false);
    const [showModalB, setShowModalB] = useState(false);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [onlyEven, setOnlyEven] = useState(false);

    console.log(contacts, 'contacts');
    const handleShowModalA = () => {
        setShowModalA(true);
    };

    const handleShowModalB = () => {
        setShowModalB(true);
    };

    const handleCloseModal = () => {
        setShowModalA(false);
        setShowModalB(false);
    };

    const handleToggleEven = () => {
        setOnlyEven(!onlyEven);
        if (onlyEven) {
            setFilteredContacts(contacts.filter(contact => contact.id % 2 === 0));
        } else {
            setFilteredContacts(contacts);
        }
    };

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


                {filteredContacts.map(contact => (
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


                {filteredContacts.map(contact => (
                    <div key={contact.id}>
                        <p>{contact.id} - {contact.phone}</p>
                    </div>
                ))}
            </CustomModal>

        </div>
    );
}

export default Problem2;

