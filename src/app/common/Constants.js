import {Dimensions} from 'react-native';

const constants = {
    FontFamily: {
        Roboto_Black: 'Roboto-Black.ttf',
        Roboto_BlackItaliic: 'Roboto-BlackItalic.ttf',
        Roboto_Bold: 'Roboto-Bold.ttf',
        Roboto_BoldItaliic: 'Roboto-BoldItalic.ttf',
        Roboto_Italiic: 'Roboto-Italic.ttf',
        Roboto_Light: 'Roboto-Light.ttf',
        Roboto_Light: 'Roboto-Light.ttf',
        Roboto_LightItalic: 'Roboto-LightItalic.ttf',
        Roboto_Medium: 'Roboto-Medium.ttf',
        Roboto_MediumItalic: 'Roboto-MediumItalic.ttf',
        Roboto_Regular: 'Roboto-Regular.ttf',
        Roboto_Thin: 'Roboto-Thin.ttf',
        Roboto_ThinItalic: 'Roboto-ThinItalic.ttf'
    },

    FontSize: {
        superTiny: 9,
        tiny: 11,
        small: 13,
        medium: 15,
        big: 18,
        large: 20,
    },

    ScreenSize: Dimensions.get('window'),

    Screen: {
        Home: 'Home'
    }
}

export default constants;