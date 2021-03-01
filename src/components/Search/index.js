import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

const Search = ({searchTerm, onChangeHandler}) => {
    return <Form inline className="mb-4">
        <FormControl size="lg" type="text" placeholder="Search" value={searchTerm} onChange={event => onChangeHandler(event)} className="mr-3" />
    </Form>;
}

export default Search;