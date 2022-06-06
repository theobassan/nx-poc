import React from 'react';
import { render } from '@testing-library/react';

import { Text } from '../text';
import View from './View';

describe('<View />', () => {
    it('render with ID', () => {
        const { getByTestId } = render(<View testID="test" />);

        const view = getByTestId('view-test');

        expect(view).toBeTruthy();
    });

    it('render without ID', () => {
        const children = 'Test';

        const { getByText } = render(<View>{children}</View>);

        const view = getByText(children);

        expect(view).toBeTruthy();
    });

    it('render string children', () => {
        const children = 'Test';

        const { getByTestId } = render(<View testID="test">{children}</View>);

        const view = getByTestId('text-view-test');

        expect(view.textContent).toEqual(children);
    });

    it('render JSX.Element children', () => {
        const children = <Text testID="test" />;

        const { getByTestId } = render(<View>{children}</View>);

        const viewText = getByTestId('text-test');

        expect(viewText).toBeTruthy();
    });

    it('render JSX.Element[] children', () => {
        const children = (
            <>
                <Text testID="test1" />
                <Text testID="test2" />
            </>
        );

        const { getByTestId } = render(<View>{children}</View>);

        const viewText1 = getByTestId('text-test1');
        const viewText2 = getByTestId('text-test2');

        expect(viewText1).toBeTruthy();
        expect(viewText2).toBeTruthy();
    });
});
