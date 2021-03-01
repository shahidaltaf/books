import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

const Pagination = ({currentPage, totalPages}) => {
    const firstPage = currentPage === 1;
    const lastPage = currentPage >= totalPages;

    return (currentPage <= totalPages) && <div className="mb-4">
        <LinkContainer to={`/${ firstPage ? currentPage : currentPage - 1}`}><Button variant="outline-primary" disabled={firstPage}>Previous</Button></LinkContainer>
        <span className="px-2">Page: {currentPage} of {totalPages}</span>
        <LinkContainer to={`/${ lastPage ? currentPage : currentPage + 1}`}><Button variant="outline-primary" disabled={lastPage}>Next</Button></LinkContainer>
    </div>;
}

export default Pagination;