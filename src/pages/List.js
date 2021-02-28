import React, { useEffect} from 'react';
import { useParams } from "react-router-dom";

const List = () => {
    const { page=1, itemsPerPage=20 } = useParams();

    useEffect(() => {
        console.log('call service');
    }, []);

    return <>
        <h1>Books List</h1>
        <p>Page: {page}</p>
        <p>Items: {itemsPerPage}</p>
    </>;
}

export default List