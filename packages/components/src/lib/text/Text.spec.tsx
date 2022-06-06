import React from 'react';
import { render } from '@testing-library/react';

import { default as Text } from './Text';

describe('<Text />', () => {
    it('render with ID', () => {
        const label = 'Test';

        const { getByTestId } = render(<Text testID="test">{label}</Text>);

        const text = getByTestId('text-test');

        expect(text.textContent).toEqual(label);
    });

    it('render without ID', () => {
        const label = 'Test';

        const { getByText } = render(<Text>{label}</Text>);

        const text = getByText(label);

        expect(text).toBeTruthy();
    });
});
