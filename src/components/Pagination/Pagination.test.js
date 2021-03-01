import { render, screen } from '@testing-library/react';
import Pagination from './index';

test('renders text from prop values', () => {
    render(<Pagination currentPage={2} totalPages={10} />);
    expect(screen.getByText(/Page: 2 of 10/i)).toBeInTheDocument();
});

test('renders Previous button as disabled if currentPage is 1', () => {
    render(<Pagination currentPage={1} totalPages={10} />);
    expect(screen.getByText(/Previous/i)).toBeDisabled();
});

test('renders Next button as disabled if currentPage is 10', () => {
    render(<Pagination currentPage={10} totalPages={10} />);
    expect(screen.getByText(/Next/i)).toBeDisabled();
});

test('renders Next and Previous buttons as active', () => {
    render(<Pagination currentPage={4} totalPages={10} />);
    expect(screen.getByText(/Next/i)).not.toBeDisabled();
    expect(screen.getByText(/Previous/i)).not.toBeDisabled();
});