import React from 'react';
import { motion } from 'framer-motion';

const ImageGrid = ({setSelectedImg, docs}) => {

    return (
        <div className="img-grid">
            { docs && docs.map(doc => 
                (
                //adds a div with an image for every existing document
                //setSelectedImg saves the document that was clicked so that the modal can display it
                <motion.div className="img-wrap" key={doc.id} onClick={() => setSelectedImg(doc)}
                    whileHover={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.29)",
                    cursor: 'pointer' }} layout >

                    <motion.img src={doc.url} alt="uploaded file"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ delay: 1 }} />
                </motion.div>
            )) }
        </div>
    )
}

export default ImageGrid;