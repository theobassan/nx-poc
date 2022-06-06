import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import { useTheme, Theme } from '@copilot/providers';
import { guid } from '@copilot/utils';

type TextProps = {
    testID?: string;
    children?: string;
};

function Text(props: TextProps): JSX.Element {
    const { theme } = useTheme();

    const testID = `text-${props.testID ?? guid()}`;

    return (
        <NativeText testID={testID} style={styles(theme).regular}>
            {props.children}
        </NativeText>
    );
}

export default Text;

function styles(theme: Theme) {
    return StyleSheet.create({
        regular: {
            fontFamily: theme.fonts.regular.fontFamily,
            fontWeight: theme.fonts.regular.fontWeight,
            color: theme.colors.text,
        },
    });
}
