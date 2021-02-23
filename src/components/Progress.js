import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const Progress = ({ file, setFile, fileData, setFileData, event }) => {
    const { url, progress } = useStorage(file, fileData);
    
    useEffect(() => {
        if (url) {
            setFile(null);
            setFileData({name: 'Unknown', brand: 'Unknown', type: 'Unknown', description: 'None'});
            event.target.reset();
        }
    }, [url]);

    return (
        <motion.div className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: progress + '%' }} ></motion.div>
    )
}

export default Progress;