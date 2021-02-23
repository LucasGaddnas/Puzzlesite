import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
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
                <div>
                    <h2>Name: {selectedImg.name}</h2>
                    <h3>Brand: {selectedImg.brand}</h3>
                    <h3>Type: {selectedImg.type}</h3>
                    <h3>Description: {selectedImg.description}</h3>
                </div>
            </div>
        </motion.div>
    )
}

export default Modal;