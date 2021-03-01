import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
    return <div className="text-white p-4 bg-primary">
        <Container>
            <h1 className="m-0">Books List</h1>
        </Container>
    </div>;
}

export default Header;