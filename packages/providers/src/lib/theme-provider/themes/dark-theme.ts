import { Platform } from 'react-native';

import { Theme } from '../domain';
import fonts from './fonts';

const DarkTheme: Theme = {
    animation: {
        scale: 1,
    },
    colors: {
        accent: '#03dac6',
        backdrop: 'rgba(0, 0, 0, 0.5)',
        background: 'rgb(1, 1, 1)',
        border: 'rgb(39, 39, 41)',
        card: 'rgb(18, 18, 18)',
        disabled: 'rgba(255, 255, 255, 0.38)',
        error: '#CF6679',
        notification: 'rgb(255, 69, 58)',
        onSurface: '#FFFFFF',
        placeholder: 'rgba(255, 255, 255, 0.54)',
        primary: 'rgb(10, 132, 255)',
        surface: '#121212',
        text: 'rgb(229, 229, 231)',
    },
    dark: true,
    fonts: Platform.select(fonts),
    mode: 'adaptive',
    roundness: 4,
};

export default DarkTheme;
