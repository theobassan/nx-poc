import { Platform } from 'react-native';

import { Theme } from '../domain';
import fonts from './fonts';

const LightTheme: Theme = {
    animation: {
        scale: 1,
    },
    colors: {
        accent: '#03dac4',
        backdrop: 'rgba(0, 0, 0, 0.5)',
        background: 'rgb(242, 242, 242)',
        border: 'rgb(216, 216, 216)',
        card: 'rgb(255, 255, 255)',
        disabled: 'rgba(0, 0, 0, 0.26)',
        error: '#B00020',
        notification: 'rgb(255, 59, 48)',
        onSurface: '#000000',
        placeholder: 'rgba(0, 0, 0, 0.54)',
        primary: 'rgb(0, 122, 255)',
        surface: '#ffffff',
        text: 'rgb(28, 28, 30)',
    },
    dark: false,
    fonts: Platform.select(fonts),
    roundness: 4,
};

export default LightTheme;
