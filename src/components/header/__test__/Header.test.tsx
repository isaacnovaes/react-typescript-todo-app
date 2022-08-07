import { render } from '@testing-library/react';
import Header from '../Header';

describe('test Header', () => {
    test('render header', () => {
        const { getByRole } = render(<Header />);
        const heading = getByRole('heading');
        expect(heading).toBeVisible();
        expect(heading).toBeInTheDocument();
    });
});
