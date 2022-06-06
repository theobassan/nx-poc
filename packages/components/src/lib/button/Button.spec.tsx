import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Text } from '../text';
import Button from './Button';

describe('<Button />', () => {
    it('render with ID', () => {
        const { getByTestId } = render(<Button testID="test" />);

        const button = getByTestId('button-test');

        expect(button).toBeTruthy();
    });

    it('render without ID', () => {
        const children = 'Test';

        const { getByText } = render(<Button>{children}</Button>);

        const button = getByText(children);

        expect(button).toBeTruthy();
    });

    it('render string children', () => {
        const children = 'Test';

        const { getByTestId } = render(<Button testID="test">{children}</Button>);

        const button = getByTestId('text-button-test');

        expect(button.textContent).toEqual(children);
    });

    it('render JSX.Element children', () => {
        const children = <Text testID="test" />;

        const { getByTestId } = render(<Button>{children}</Button>);

        const buttonText = getByTestId('text-test');

        expect(buttonText).toBeTruthy();
    });

    it('render JSX.Element[] children', () => {
        const children = (
            <>
                <Text testID="test1" />
                <Text testID="test2" />
            </>
        );

        const { getByTestId } = render(<Button>{children}</Button>);

        const buttonText1 = getByTestId('text-test1');
        const buttonText2 = getByTestId('text-test2');

        expect(buttonText1).toBeTruthy();
        expect(buttonText2).toBeTruthy();
    });

    it('should call onPress', () => {
        const onPress = jest.fn();

        const { getByTestId } = render(<Button testID="test" onPress={onPress} />);

        const button = getByTestId('button-test');

        fireEvent.click(button);

        expect(onPress).toBeCalledTimes(1);
    });
});
