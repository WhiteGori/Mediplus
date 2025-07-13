import {Appearance} from 'react-native';

// If getColorScheme() returns 'light' or null, light theme is used.
// Only if 'dark' is returned we will change to the dark theme.
// This means the default theme is the light theme.
let lightTheme = Appearance.getColorScheme() !== 'dark';
console.log('** DEBUG ** lightTheme: ' + lightTheme);

/****************************************************/
/*                     COMPONENTS                   */
/****************************************************/

const COMPONENT_COLOR_LIGHT = {
  PRIMARY: '#3F51B5', // Indigo 500
  SECONDARY: '#FF9800', // Orange 500
  BACKGROUND: '#F5F5F5', // Grey 100
};

const COMPONENT_COLOR_DARK = {
  PRIMARY: '#303F9F', // Indigo 700
  SECONDARY: '#FF5722', // Deep Orange 500
  BACKGROUND: '#212121', // Grey 900
};

export const COMPONENT_COLOR = {
  PRIMARY: lightTheme
    ? COMPONENT_COLOR_LIGHT.PRIMARY
    : COMPONENT_COLOR_DARK.PRIMARY,
  SECONDARY: lightTheme
    ? COMPONENT_COLOR_LIGHT.SECONDARY
    : COMPONENT_COLOR_DARK.SECONDARY,
  BACKGROUND: lightTheme
    ? COMPONENT_COLOR_LIGHT.BACKGROUND
    : COMPONENT_COLOR_DARK.BACKGROUND,
};

/****************************************************/
/*                        TEXT                      */
/****************************************************/

const TEXT_COLOR_LIGHT = {
  PRIMARY: 'black',
  SECONDARY: 'white',
  PLACEHOLDERS: '#616161', // Grey 700
  LINK: '#1565C0', // Blue 800
};

const TEXT_COLOR_DARK = {
  PRIMARY: 'white',
  SECONDARY: 'black',
  PLACEHOLDERS: '#BDBDBD', // Grey 400
  LINK: '#42A5F5', // Blue 400
};

export const TEXT_COLOR = {
  PRIMARY: lightTheme ? TEXT_COLOR_LIGHT.PRIMARY : TEXT_COLOR_DARK.PRIMARY,
  SECONDARY: lightTheme
    ? TEXT_COLOR_LIGHT.SECONDARY
    : TEXT_COLOR_DARK.SECONDARY,
  PLACEHOLDERS: lightTheme
    ? TEXT_COLOR_LIGHT.PLACEHOLDERS
    : TEXT_COLOR_DARK.PLACEHOLDERS,
  LINK: lightTheme ? TEXT_COLOR_LIGHT.LINK : TEXT_COLOR_DARK.LINK,
};
