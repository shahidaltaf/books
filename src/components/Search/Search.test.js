import { render, screen } from '@testing-library/react';
import Search from './index';

test('renders searchTerm prop as input value',  () => {
    render(<Search searchTerm="Book" />);
    expect(screen.getByDisplayValue(/Book/i)).toBeInTheDocument();
});