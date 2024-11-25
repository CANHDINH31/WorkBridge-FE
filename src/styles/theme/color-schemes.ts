import type { ColorSystemOptions } from '@mui/material/styles';

import type { ColorScheme } from './types';

declare module '@mui/material/styles' {}

export const colorSchemes = {
  light: {
    palette: {
      primary: {
        main: '#1976d2',
      },
      neutral: {
        50: '#f5f5f5',
        100: '#e0e0e0',
        200: '#c2c2c2',
        300: '#a3a3a3',
        400: '#858585',
        500: '#666666',
        600: '#4d4d4d',
        700: '#333333',
        800: '#1a1a1a',
        900: '#0d0d0d',
        950: '#050505',
      },
    },
  },
  dark: {
    palette: {
      primary: {
        main: '#bb86fc',
      },
      neutral: {
        50: '#121212',
        100: '#1e1e1e',
        200: '#2a2a2a',
        300: '#383838',
        400: '#454545',
        500: '#525252',
        600: '#616161',
        700: '#757575',
        800: '#9e9e9e',
        900: '#e0e0e0',
        950: '#ffffff',
      },
    },
  },
} satisfies Partial<Record<ColorScheme, ColorSystemOptions>>;
