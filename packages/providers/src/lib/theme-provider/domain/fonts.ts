type Font = {
    fontFamily: string;
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
};

type Fonts = {
    regular: Font;
    medium: Font;
    light: Font;
    thin: Font;
};

export default Fonts;
