import React, { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const Pagination = ({setQuery, firstDoc, lastDoc}) => {
    const [itemsOnPage, setItemsOnPage] = useState(3);
    const [order, setOrder] = useState('desc');
    const [field, setField] = useState('createdAt');
    //console.log('first', firstDoc);
    //console.log('last', lastDoc);

    const nextPage = () => {
        if (lastDoc) {
            setQuery(projectFirestore.collection('puzzles').orderBy(field, order).limit(itemsOnPage).startAfter(lastDoc));
        }
    }

    const prevPage = () => {
        if (firstDoc) {
            setQuery(projectFirestore.collection('puzzles').orderBy(field, order).endBefore(firstDoc).limitToLast(itemsOnPage));
        }
    }

    useEffect(() => {
        setQuery(projectFirestore.collection('puzzles').orderBy(field, order).limit(itemsOnPage));
    }, [field, order, itemsOnPage]);
    
    return (
        <div>
            <select onChange={(e) => setItemsOnPage(parseInt(e.target.value, 10))}>
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
            <select onChange={(e) => setOrder(e.target.value)}>
                <option value="desc">Newest</option>
                <option value="asc">Oldest</option>
            </select>
            <select onChange={(e) => setField(e.target.value)}>
                <option value="createdAt">Time</option>
                <option value="name">Name</option>
                <option value="type">Type</option>
                <option value="brand">Brand</option>
            </select>
            <button onClick={prevPage}>Previous page</button>
            <button onClick={nextPage}>Next page</button>
        </div>
    );
}

export default Pagination;