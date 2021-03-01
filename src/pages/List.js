import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'

import { Button, Container } from 'react-bootstrap';

import { postBooks } from '../services/api';

//     books: [
//         book_author: [“xxxxxx”],
//         book_publication_city: “xxxxxx”,
//         book_publication_country: “xxxxxx”,
//         book_publication_year: “xxxxxx”,
//         book_publication_city: “xxxxxx”,
//         book_pages: 23,
//         book_title: “xxxxxx”,
//         id: 1
//     ]

const List = () => {
    const { page = 1 } = useParams();
    const [loading, setLoading] = useState(true);
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        setLoading(true);

        postBooks({ 
            page: parseInt(page), 
            itemsPerPage: 20, 
            filters: [{ type: 'all', values: [''] }] }).then((data) => {
                setLoading(false);
                setBookData(data.books);
                return;
        })
    }, [page]);

    return <Container>
        <h1>Books List</h1>
        {
            loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p>Page: {page}</p>
                    <ul>
                        {
                            bookData.map(item => {
                                return <li key={item.id}>[{item.id}] {item.book_title}</li>
                            })
                        }
                    </ul>
                    <LinkContainer to={`/${parseInt(page) + 1}`}><Button>Next</Button></LinkContainer>
                </>
            )
        }

    </Container>;
}

export default List