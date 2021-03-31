import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg, user }) => {
    //checks if the area around the modal is clicked and sets the document to be displayed to null if true
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop'))
            setSelectedImg(null);
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
            <div className="modal">
                <img src={selectedImg.url} alt="enlarged" />
                <div className="info">
                    <h2>Namn: {selectedImg.name}</h2>
                    <h3>Märke: {selectedImg.brand}</h3>
                    <h3>Typ: {selectedImg.type}</h3>
                    <h3>Beskrivning: <div>{selectedImg.description}</div></h3>
                    { user && <div><button className="control">Redigera</button></div>}
                </div>
            </div>
        </motion.div>
    )
}

export default Modal;