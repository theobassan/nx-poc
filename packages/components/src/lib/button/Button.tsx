import * as React from 'react';
import { GestureResponderEvent, Pressable as NativeButton, StyleSheet } from 'react-native';

import { Text } from '../text';
import { useTheme, Theme } from '@copilot/providers';
import { guid } from '@copilot/utils';

type ButtonProps = {
    testID?: string;
    children?: string | JSX.Element | JSX.Element[];
    onPress?: (event: GestureResponderEvent) => void;
};

function Button(props: ButtonProps): JSX.Element {
    const { theme } = useTheme();

    const testID = `button-${props.testID ?? guid()}`;

    return (
        <NativeButton testID={testID} style={styles(theme).button} onPress={props.onPress}>
            {props.children && typeof props.children === 'string' && <Text testID={testID}>{props.children}</Text>}
            {props.children && typeof props.children !== 'string' && props.children}
        </NativeButton>
    );
}

export default Button;

function styles(theme: Theme) {
    return StyleSheet.create({
        button: {
            margin: 24,
            fontFamily: theme.fonts.medium.fontFamily,
            fontWeight: theme.fonts.medium.fontWeight,
            borderColor: theme.colors.border,
        },
    });
}
