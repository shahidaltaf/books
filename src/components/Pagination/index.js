import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Pagination = ({currentPage, totalPages}) => {
    const firstPage = currentPage === 1;
    const lastPage = currentPage >= totalPages;
    const history = useHistory();

    const handlePrevious = () => {
        history.push(`/${ firstPage ? currentPage : currentPage - 1}`);
    }

    const handleNext = () => {
        history.push(`/${ lastPage ? currentPage : currentPage + 1}`);
    }

    return (currentPage <= totalPages) && <div className="mb-4">
        <Button variant="outline-primary" disabled={firstPage} onClick={handlePrevious}>Previous</Button>
        <span className="px-2">Page: {currentPage} of {totalPages}</span>
        <Button variant="outline-primary" disabled={lastPage} onClick={handleNext}>Next</Button>
    </div>;
}

export default Pagination;