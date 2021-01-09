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
            <img src={selectedImg} alt="enlarged" />
        </motion.div>
    )
}

export default Modal;