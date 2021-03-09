import React, { useEffect } from "react";
import { projectFirestore } from '../firebase/config';

const Filter = ({setQuery, setItemsOnPage, setOrder, setField, itemsOnPage, order, field}) => {

    useEffect(() => {
        setQuery(projectFirestore.collection('puzzles').orderBy(field, order).limit(itemsOnPage));
    }, [field, order, itemsOnPage]);

    return (
        <div>
            <label htmlFor="items">Items shown</label>
            <select name="items" onChange={(e) => setItemsOnPage(parseInt(e.target.value, 10))}>
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
            <label htmlFor="order">Order by</label>
            <select name="order" onChange={(e) => setOrder(e.target.value)}>
                <option value="desc">Newest</option>
                <option value="asc">Oldest</option>
            </select>
            <label htmlFor="type">Filter</label>
            <select name="type" onChange={(e) => setField(e.target.value)}>
                <option value="createdAt">Time</option>
                <option value="name">Name</option>
                <option value="type">Type</option>
                <option value="brand">Brand</option>
            </select>
        </div>
    )
}

export default Filter;