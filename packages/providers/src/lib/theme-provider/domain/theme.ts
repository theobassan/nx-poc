import Fonts from './fonts';

type Anymation = {
    scale: number;
};

type Colors = {
    accent: string;
    backdrop: string;
    background: string;
    border: string;
    card: string;
    disabled: string;
    error: string;
    notification: string;
    onSurface: string;
    placeholder: string;
    primary: string;
    surface: string;
    text: string;
};

type Mode = 'adaptive' | 'exact';

type Theme ={
    animation: Anymation;
    colors: Colors;
    dark: boolean;
    fonts: Fonts;
    mode?: Mode;
    roundness: number;
}

export default Theme;
