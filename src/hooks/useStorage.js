import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

/**
 * 
 * @param {The file to upload} file 
 * @param {An object with data about the uploaded file, such as name and info} filedata 
 */
const useStorage = (file, fileData) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // References
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('puzzles');

        // Uploads the file to storage
        storageRef.put(file).on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {    // Gets the url to the uploaded file
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            const name = fileData.name;
            const brand = fileData.brand;
            const type = fileData.type;
            const description = fileData.description;
            
            // Adds the data to firestore
            collectionRef.add({ url, createdAt, name, brand, type, description });
            setUrl(url);
        });
    }, [file, fileData]);

    return { progress, url, error }
}

export default useStorage;