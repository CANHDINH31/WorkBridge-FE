import type { ColorSystemOptions } from '@mui/material/styles';

import type { ColorScheme } from './types';

declare module '@mui/material/styles' {}

export const colorSchemes = {} satisfies Partial<Record<ColorScheme, ColorSystemOptions>>;
