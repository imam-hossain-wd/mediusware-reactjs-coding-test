// import React from 'react';

// const Problem2 = () => {

//     return (

//         <div className="container">
//             <div className="row justify-content-center mt-5">
//                 <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
//                 <div className="d-flex justify-content-center gap-3">
//                 <button className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
//                 <button className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
//                 </div>
                
//             </div>
//         </div>
//     );
// };

// export default Problem2;


import React, { useState } from 'react';
import CustomModal from './Modal';

const Problem2 = () => {
    const [showModalA, setShowModalA] = useState(false);
    const [showModalB, setShowModalB] = useState(false);

    const handleOpenModalA = () => {
        setShowModalA(true);
        setShowModalB(false);
    };

    const handleOpenModalB = () => {
        setShowModalB(true);
        setShowModalA(false);
    };

    const handleCloseModals = () => {
        setShowModalA(false);
        setShowModalB(false);
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={handleOpenModalA}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={handleOpenModalB}>US Contacts</button>
                </div>
            </div>
            
            <CustomModal
                show={showModalA}
                onHide={handleCloseModals}
                title="Modal A"
            >
                Content of Modal A
            </CustomModal>
            
            <CustomModal
                show={showModalB}
                onHide={handleCloseModals}
                title="Modal B"
            >
                Content of Modal B
            </CustomModal>
        </div>
    );
};

export default Problem2;
