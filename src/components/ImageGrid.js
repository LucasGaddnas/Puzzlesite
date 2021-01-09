import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({setSelectedImg}) => {
    //read the puzzles collection from firebase into an array
    const { docs } = useFirestore('puzzles');
    console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                //adds a div with an image for every existing document
                //setSelectedImg saves the document that was clicked so that the modal can display it
                <motion.div className="img-wrap" key={doc.id} onClick={() => setSelectedImg(doc.url)}
                    whileHover={{ opacity: 1 }} layout >
                    <motion.img src={doc.url} alt="uploaded file"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ delay: 1 }} />
                </motion.div>
            )) }
        </div>
    )
}

export default ImageGrid;