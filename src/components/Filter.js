import React, { useEffect } from "react";
import { projectFirestore } from '../firebase/config';
import Collapsible from 'react-collapsible';


const Filter = ({setQuery, setItemsOnPage, setOrder, setField, itemsOnPage, order, field}) => {

    useEffect(() => {
        setQuery(projectFirestore.collection('puzzles').orderBy(field, order).limit(itemsOnPage));
    }, [field, order, itemsOnPage]);

    return (
        <div className="filter-container">
            <Collapsible trigger={<button>Filter</button>} triggerTagName="div"
                triggerSibling={()=>
                    <div className="display">
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
                    </div>
            }>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Collapsible>
        </div>
    )
}
/*
            <label htmlFor="type">Filtrera enligt: </label>
            <select className="control" name="type" onChange={(e) => setField(e.target.value)}>
                <option value="createdAt">Tid</option>
                <option value="name">Namn</option>
                <option value="type">Typ</option>
                <option value="brand">Märke</option>
            </select>
*/

export default Filter;