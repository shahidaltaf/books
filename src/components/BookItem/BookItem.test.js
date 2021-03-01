import { render, screen } from '@testing-library/react';
import BookItem from './index';

test('renders prop values',  () => {
    const props = {id: 1, author: "John Smith", city: "London", country: "England", year: 1980, pages: 100, title: "Book Title"}
    render(<BookItem {...props} />);
    expect(screen.getByText(/John Smith/i)).toBeInTheDocument();
});