import React from 'react';
import { View as NativeView, StyleSheet } from 'react-native';

import { Text } from '../text';
import { useTheme, Theme } from '@copilot/providers';
import { guid } from '@copilot/utils';

type ViewProps = {
    testID?: string;
    children?: string | JSX.Element | JSX.Element[];
};

function View(props: ViewProps): JSX.Element {
    const { theme } = useTheme();

    const testID = `view-${props.testID ?? guid()}`;

    return (
        <NativeView testID={testID} style={styles(theme).container}>
            {props.children && typeof props.children === 'string' && <Text testID={testID}>{props.children}</Text>}
            {props.children && typeof props.children !== 'string' && props.children}
        </NativeView>
    );
}

export default View;

function styles(theme: Theme) {
    return StyleSheet.create({
        container: {
            backgroundColor: theme.colors.background,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 8,
        },
    });
}
