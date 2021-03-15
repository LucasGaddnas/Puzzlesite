import React from 'react';
import { projectFirestore } from '../firebase/config';

const Pagination = ({setQuery, firstDoc, lastDoc, itemsOnPage, order, field}) => {
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
    
    return (
        <div className="pagination">
            <button className="control" onClick={prevPage}>Previous page</button>
            <button className="control" onClick={nextPage}>Next page</button>
        </div>
    );
}

export default Pagination;