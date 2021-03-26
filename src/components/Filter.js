import React, { useEffect } from "react";
import { projectFirestore } from '../firebase/config';

const Filter = ({setQuery, setItemsOnPage, setOrder, setField, itemsOnPage, order, field}) => {

    useEffect(() => {
        setQuery(projectFirestore.collection('puzzles').orderBy(field, order).limit(itemsOnPage));
    }, [field, order, itemsOnPage]);

    return (
        <div className="filter">
            <label htmlFor="items">Visa: </label>
            <select className="control" name="items" onChange={(e) => setItemsOnPage(parseInt(e.target.value, 10))}>
                <option value="16">16</option>
                <option value="24">24</option>
                <option value="32">32</option>
            </select>
            <label htmlFor="order">Sortera enligt: </label>
            <select className="control" name="order" onChange={(e) => setOrder(e.target.value)}>
                <option value="desc">Nyaste först</option>
                <option value="asc">Äldsta först</option>
            </select>
            <label htmlFor="type">Filtrera enligt: </label>
            <select className="control" name="type" onChange={(e) => setField(e.target.value)}>
                <option value="createdAt">Tid</option>
                <option value="name">Namn</option>
                <option value="type">Typ</option>
                <option value="brand">Märke</option>
            </select>
        </div>
    )
}

export default Filter;