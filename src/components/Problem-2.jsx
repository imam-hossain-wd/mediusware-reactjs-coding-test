import React, { useState, useEffect } from 'react';
import CustomModal from './Modal';

function Problem2() {
    const [showModalA, setShowModalA] = useState(false);
    const [showModalB, setShowModalB] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [onlyEven, setOnlyEven] = useState(false);

    useEffect(() => {
        fetchContacts();
    }, []);
      
    const fetchContacts = () => {
        fetch('https://contact.mediusware.com/api/contacts/?format=json&page=30')
            .then(response => response.json())
            .then(data => {
                setContacts(data.results);
                setFilteredContacts(data.results);
            })
            .catch(error => console.error('Error fetching contacts:', error));
    };


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

