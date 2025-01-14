import {
  DefaultTheme as NavigationLightTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  MD3LightTheme as PaperLightTheme,
  MD3DarkTheme as PaperDarkTheme,
  MD3Theme,
  adaptNavigationTheme,
} from 'react-native-paper';
import {
  MD3Colors,
  NavigationTheme,
} from 'react-native-paper/lib/typescript/types';

const LIGHT_PALLETE = {
  primary: '#C52211',
  darkPrimary: '#D32F2F',
  lightPrimary: '#E08C79',
  secondary: '#991B12',
  background: '#EDEDED',
  tertiary: '#FF9800',
  text: '#444',
  white: '#FFFFFF',
  black: '#000000',
  grey: '#555555',
  error: '#DE4E4E',
  outline: '#BDBDBD',
  success: '#7dcf5d',
  warning: '#E69737',
};

const {LightTheme, DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationLightTheme,
  reactNavigationDark: NavigationDarkTheme,
});

export type ExtendedColors = {
  colors: {
    success: string;
    warning: string;
  };
};

export type ExtendedTheme = MD3Theme & NavigationTheme & ExtendedColors;

export const AppLightTheme: ExtendedTheme = {
  ...PaperLightTheme,
  ...LightTheme,
  colors: {
    ...PaperLightTheme.colors,
    ...LightTheme.colors,
    primary: LIGHT_PALLETE.primary,
    onPrimary: LIGHT_PALLETE.white,
    primaryContainer: LIGHT_PALLETE.primary,
    onPrimaryContainer: LIGHT_PALLETE.white,
    secondary: LIGHT_PALLETE.secondary,
    onSecondary: LIGHT_PALLETE.white,
    secondaryContainer: LIGHT_PALLETE.secondary,
    onSecondaryContainer: LIGHT_PALLETE.white,
    tertiary: LIGHT_PALLETE.tertiary,
    onTertiary: LIGHT_PALLETE.white,
    tertiaryContainer: LIGHT_PALLETE.tertiary,
    onTertiaryContainer: LIGHT_PALLETE.white,
    error: LIGHT_PALLETE.error,
    onError: LIGHT_PALLETE.white,
    errorContainer: LIGHT_PALLETE.error,
    onErrorContainer: LIGHT_PALLETE.white,
    background: LIGHT_PALLETE.background,
    onBackground: LIGHT_PALLETE.text,
    surface: LIGHT_PALLETE.white,
    onSurface: LIGHT_PALLETE.text,
    surfaceVariant: LIGHT_PALLETE.background,
    onSurfaceVariant: LIGHT_PALLETE.text,
    outline: LIGHT_PALLETE.outline,
    outlineVariant: LIGHT_PALLETE.outline,
    shadow: LIGHT_PALLETE.black,
    scrim: LIGHT_PALLETE.black,
    inverseSurface: LIGHT_PALLETE.grey,
    inverseOnSurface: LIGHT_PALLETE.white,
    inversePrimary: LIGHT_PALLETE.lightPrimary,
    elevation: {
      level0: 'transparent',
      level1: '#FFFFFF88',
      level2: '#FFFFFF',
      level3: '#AAA',
      level4: '#888',
      level5: '#666',
    },
    surfaceDisabled: LIGHT_PALLETE.lightPrimary,
    onSurfaceDisabled: LIGHT_PALLETE.text,
    backdrop: LIGHT_PALLETE.background,
    //Navigation theme
    card: LIGHT_PALLETE.primary,
    text: LIGHT_PALLETE.white,
    border: LIGHT_PALLETE.outline,
    notification: LIGHT_PALLETE.darkPrimary,
    success: LIGHT_PALLETE.success,
    warning: LIGHT_PALLETE.warning,
  },
};
