import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

import { colorSchemes } from './color-schemes';
import { text } from './colors';
import { shadows } from './shadows';
import type { Theme } from './types';
import { typography } from './typography';

declare module '@mui/material/styles/createPalette' {
  interface PaletteRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  }

  interface Palette {
    neutral: PaletteRange;
    green: PaletteRange;
  }

  interface PaletteOptions {
    neutral?: PaletteRange;
    green?: PaletteRange;
  }

  interface TypeBackground {
    level1: string;
    level2: string;
    level3: string;
  }
}

export function createTheme(): Theme {
  const theme = extendTheme({
    breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1440 } },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@global': {
            '*': {
              boxSizing: 'border-box',
              margin: '0',
              padding: '0',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
          },
          outlined: {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    colorSchemes,
    shadows,
    shape: { borderRadius: 8 },
    typography: {
      h1: {
        color: text,
      },
      h2: {
        color: text,
      },
      h3: {
        color: text,
      },
      h4: { color: text },
      h5: { color: text },
      h6: { color: text },
      subtitle1: { color: text },
      subtitle2: { color: text },
      body1: { color: text },
      body2: { color: text },
      button: { color: text },
      caption: { color: text },
      overline: { color: text },
    },
  });

  return theme;
}
