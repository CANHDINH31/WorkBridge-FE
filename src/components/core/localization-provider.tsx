'use client';

import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider as Provider } from '@mui/x-date-pickers/LocalizationProvider';

export interface ILocalizationProviderProps {
  children: React.ReactNode;
}

export function LocalizationProvider({ children }: ILocalizationProviderProps): React.JSX.Element {
  return <Provider dateAdapter={AdapterDayjs}>{children}</Provider>;
}
