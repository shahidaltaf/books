import { render, screen } from '@testing-library/react';
import Header from './index';

test('renders correct text', () => {
    const component = render(<Header />);
    expect(screen.getByText(/Books List/i)).toBeInTheDocument();
});

