import React from 'react';

const BookItem = ({ id, author, city, country, year, pages, title }) => {
    return <div id={id}>
        <h3 className="text-primary">{title}</h3>
        <h4>Author: {author}</h4>
        <p className="text-muted">Location: {city}, {country}. Year: {year}. Number of pages: {pages}</p>
    </div>;
}

export default BookItem;