import React, { createContext, useEffect, useState } from 'react';

import { useColorScheme } from 'react-native';

import { Theme } from './domain';
import { DarkTheme, LightTheme } from './themes';

export interface ThemeContextType {
    theme: Theme;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const ThemeContextProvider = ({ children }: { children?: JSX.Element | JSX.Element[] }): JSX.Element => {
    const [theme, setTheme] = useState<Theme>(LightTheme);

    const colorScheme = useColorScheme();

    useEffect(() => {
        if (colorScheme === 'dark' && !theme.dark) {
            setTheme(DarkTheme);
        } else if (colorScheme !== 'dark' && theme.dark) {
            setTheme(LightTheme);
        }
    }, [colorScheme]);

    return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
