import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { Container, ListGroup, Spinner } from 'react-bootstrap';

import Pagination from '../components/Pagination';
import Header from '../components/Header';
import Search from '../components/Search';
import BookItem from '../components/BookItem';
import { postBooks } from '../services/api';

const List = () => {
    const { page = 1, itemsPerPage = 20 } = useParams();
    const [loading, setLoading] = useState(true);
    const [bookData, setBookData] = useState([]);
    const [resultCount, setResultCount] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const offset = page * itemsPerPage;
    const offsetStart = (offset - itemsPerPage) + 1;
    const history = useHistory();

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        history.push('/');
    }

    useEffect(() => {
        setLoading(true);
        postBooks({
            page: parseInt(page),
            itemsPerPage,
            filters: [{ type: 'all', values: [searchTerm] }]
        }).then((data) => {
            setLoading(false);
            setBookData(data.books);
            setResultCount(data.count);
            setTotalPages(Math.ceil(data.count / itemsPerPage));
            return;
        });
    }, [page, itemsPerPage, searchTerm]);

    return <>
        <Header />
        <Container className="py-4">
            <Search searchTerm={searchTerm} onChangeHandler={event => handleSearch(event)} />
            {
                loading ? (
                    <Spinner animation="border" variant="primary" />
                ) : (
                    <>
                        <h2 className="mb-3">
                            {
                                bookData.length > 0 ? `Showing results ${offsetStart} to ${offset > resultCount ? resultCount : offset} of ${resultCount}${searchTerm !== '' ? (' for "' + searchTerm + '"') : ''}.` : 'No results.'
                            }
                        </h2>

                        <Pagination currentPage={parseInt(page)} totalPages={totalPages} />
                        <ListGroup className="mb-4">
                            {
                                bookData.length > 0 && bookData.map(item => {
                                    const book = {
                                        id: item.id,
                                        author: item.book_author,
                                        city: item.book_publication_city,
                                        country: item.book_publication_country,
                                        year: item.book_publication_year,
                                        pages: item.book_pages,
                                        title: item.book_title
                                    };

                                    return <ListGroup.Item key={item.id}>
                                        <BookItem {...book} />
                                    </ListGroup.Item>;
                                })
                            }
                        </ListGroup>
                        <Pagination currentPage={parseInt(page)} totalPages={totalPages} />
                    </>
                )
            }
        </Container>
    </>;
}

export default List