import { useState, useEffect } from 'react';

/**
 * 
 * @param {*} collection collection to be read from Firestore
 */
const useFirestore = (query) => {
    const [docs, setDocs] = useState([]);
    const [lastDoc, setLastDoc] = useState(null);
    const [firstDoc, setFirstDoc] = useState(null)

    useEffect(() => {
        const unsub = query.onSnapshot((snapshot) => {

                // Sets the first and last documents from the current read
                setFirstDoc(snapshot.docs[0]);
                setLastDoc(snapshot.docs[snapshot.docs.length -1]);

                let documents = [];
                snapshot.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                });
                setDocs(documents);
            });

        return () => unsub();

    }, [query]);

    return { docs, firstDoc, lastDoc };
}

export default useFirestore;